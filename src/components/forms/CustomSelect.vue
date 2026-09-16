<template>
  <div ref="rootRef" class="custom-select" :class="{ 'is-open': isOpen }">
    <!-- Hidden native input to preserve HTML form validation (e.g. required) -->
    <input
      ref="hiddenInputRef"
      type="text"
      tabindex="-1"
      aria-hidden="true"
      class="custom-select__hidden-input"
      :value="modelValue"
      :required="required"
      @invalid="onInvalid"
    />

    <!-- Select Trigger -->
    <button
      type="button"
      class="custom-select__trigger"
      :class="{ 'has-value': Boolean(modelValue), 'is-invalid': isInvalid }"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-labelledby="id"
      @click="toggleDropdown"
      @keydown="onTriggerKeydown"
    >
      <span class="custom-select__value">
        {{ selectedLabel || placeholder }}
      </span>
      <IconChevronDown class="custom-select__chevron" :size="18" aria-hidden="true" />
    </button>

    <!-- Custom Options List Dropdown -->
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        ref="listboxRef"
        class="custom-select__menu"
        role="listbox"
        tabindex="-1"
        @keydown="onListboxKeydown"
      >
        <div
          v-for="(option, idx) in formattedOptions"
          :key="option.value"
          class="custom-select__option"
          :class="{
            'is-selected': option.value === modelValue,
            'is-highlighted': idx === highlightedIndex
          }"
          role="option"
          :aria-selected="option.value === modelValue"
          @mouseenter="highlightedIndex = idx"
          @click="selectOption(option.value)"
        >
        <span class="custom-select__option-text">{{ option.label }}</span>
          <div class="custom-select__option-content">
            <span v-if="option.badge" class="custom-select__option-badge">{{ option.badge }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { IconChevronDown } from '@tabler/icons-vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  required: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const rootRef = ref(null)
const hiddenInputRef = ref(null)
const listboxRef = ref(null)
const isOpen = ref(false)
const isInvalid = ref(false)
const highlightedIndex = ref(-1)

const formattedOptions = computed(() => {
  return props.options.map((opt) => {
    if (typeof opt === 'string') {
      return { label: opt, value: opt }
    }
    return {
      label: opt.label || opt.title || opt.value,
      value: opt.value ?? opt.title ?? opt.label,
      badge: opt.badge ?? opt.kicker
    }
  })
})

const selectedLabel = computed(() => {
  const found = formattedOptions.value.find((opt) => opt.value === props.modelValue)
  return found ? found.label : ''
})

function toggleDropdown() {
  if (isOpen.value) {
    closeDropdown()
  } else {
    openDropdown()
  }
}

function openDropdown() {
  isOpen.value = true
  isInvalid.value = false
  const selectedIdx = formattedOptions.value.findIndex((opt) => opt.value === props.modelValue)
  highlightedIndex.value = selectedIdx >= 0 ? selectedIdx : 0

  nextTick(() => {
    scrollToHighlighted()
  })
}

function closeDropdown() {
  isOpen.value = false
  highlightedIndex.value = -1
}

function selectOption(value) {
  emit('update:modelValue', value)
  emit('change', value)
  isInvalid.value = false
  closeDropdown()
}

function scrollToHighlighted() {
  if (!listboxRef.value) return
  const activeEl = listboxRef.value.children[highlightedIndex.value]
  if (activeEl) {
    activeEl.scrollIntoView({ block: 'nearest' })
  }
}

function onTriggerKeydown(event) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    if (!isOpen.value) {
      openDropdown()
    } else if (event.key === 'ArrowDown') {
      highlightNext()
    } else if (event.key === 'ArrowUp') {
      highlightPrev()
    } else if (event.key === 'Enter' || event.key === ' ') {
      if (highlightedIndex.value >= 0 && highlightedIndex.value < formattedOptions.value.length) {
        selectOption(formattedOptions.value[highlightedIndex.value].value)
      }
    }
  } else if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault()
    closeDropdown()
  }
}

function onListboxKeydown(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    highlightNext()
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    highlightPrev()
  } else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    if (highlightedIndex.value >= 0 && highlightedIndex.value < formattedOptions.value.length) {
      selectOption(formattedOptions.value[highlightedIndex.value].value)
    }
  } else if (event.key === 'Escape' || event.key === 'Tab') {
    closeDropdown()
  }
}

function highlightNext() {
  if (highlightedIndex.value < formattedOptions.value.length - 1) {
    highlightedIndex.value++
  } else {
    highlightedIndex.value = 0
  }
  scrollToHighlighted()
}

function highlightPrev() {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--
  } else {
    highlightedIndex.value = formattedOptions.value.length - 1
  }
  scrollToHighlighted()
}

function onInvalid() {
  isInvalid.value = true
}

function handleClickOutside(event) {
  if (rootRef.value && !rootRef.value.contains(event.target)) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleClickOutside)
})
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
}

.custom-select__hidden-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  margin: 0;
  padding: 0;
  border: 0;
  z-index: -1;
}

.custom-select__trigger {
  width: 100%;
  min-height: 48px;
  padding: 12px 14px;
  background: #ffffff;
  border: 1px solid #c9ddd5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  color: #789088;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  user-select: none;
}

.custom-select__trigger:hover {
  border-color: #9fccbd;
}

.custom-select.is-open .custom-select__trigger,
.custom-select__trigger:focus-visible {
  border-color: #08745d;
  box-shadow: 0 0 0 4px rgba(8, 116, 93, 0.11);
}

.custom-select__trigger.is-invalid {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12);
}

.custom-select__trigger.has-value {
  color: #102c26;
  font-weight: 600;
}

.custom-select__value {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom-select__chevron {
  color: #3f5c54;
  flex-shrink: 0;
  transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1), color 0.2s ease;
}

.custom-select.is-open .custom-select__chevron {
  transform: rotate(180deg);
  color: #08745d;
}

/* Dropdown Menu */
.custom-select__menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  max-height: 280px;
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid #d0e4dc;
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 14px 32px -4px rgba(10, 64, 53, 0.12), 0 4px 12px -2px rgba(10, 64, 53, 0.06);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}

/* Custom scrollbar for dropdown */
.custom-select__menu::-webkit-scrollbar {
  width: 6px;
}
.custom-select__menu::-webkit-scrollbar-track {
  background: transparent;
}
.custom-select__menu::-webkit-scrollbar-thumb {
  background: #c9ddd5;
  border-radius: 3px;
}
.custom-select__menu::-webkit-scrollbar-thumb:hover {
  background: #a3c4b7;
}

/* Option row */
.custom-select__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 500;
  color: #24423b;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
  user-select: none;
}

.custom-select__option-content {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
}

.custom-select__option-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom-select__option-badge {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 6px;
  border-radius: 4px;
  background: #e8f5f0;
  color: #08745d;
}

.custom-select__option:hover,
.custom-select__option.is-highlighted {
  background: #f0f7f4;
  color: #08745d;
}

.custom-select__option.is-selected {
  background: #e6f4ef;
  color: #08745d;
  font-weight: 600;
}

.custom-select__option-check {
  color: #08745d;
  flex-shrink: 0;
}

/* Transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top center;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>
