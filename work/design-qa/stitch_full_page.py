from pathlib import Path
from PIL import Image

ROOT = Path(__file__).parent
OUTPUT = ROOT / "VActives-full-page-design.png"
PAGE_HEIGHT = 5862
HEADER_HEIGHT = 87
SCROLL_Y = [0, 873, 1746, 2619, 3492, 4365, 4902]

slices = [Image.open(ROOT / f"full-slice-{i:02d}.png").convert("RGB") for i in range(len(SCROLL_Y))]
row_five_slice = Image.open(ROOT / "full-slice-row-five.png").convert("RGB")
footer_slice = Image.open(ROOT / "full-slice-footer.png").convert("RGB")
canvas = Image.new("RGB", (slices[0].width, PAGE_HEIGHT), "white")

canvas.paste(slices[0], (0, 0))
covered_until = slices[0].height
for image, scroll_y in zip(slices[1:], SCROLL_Y[1:]):
    crop_top = max(HEADER_HEIGHT, covered_until - scroll_y)
    cropped = image.crop((0, crop_top, image.width, image.height))
    paste_y = scroll_y + crop_top
    canvas.paste(cropped, (0, paste_y))
    covered_until = max(covered_until, scroll_y + image.height)

# Replace the quiet transition after FOUR with a capture that contains the
# complete FIVE marker and title above the sticky header.
row_five_y = 4000
row_five_crop = row_five_slice.crop((0, HEADER_HEIGHT, row_five_slice.width, row_five_slice.height))
canvas.paste(row_five_crop, (0, row_five_y + HEADER_HEIGHT))

# Restore the final page bottom without reintroducing the sticky header.
footer_y = 4873
footer_crop = footer_slice.crop((0, HEADER_HEIGHT, footer_slice.width, footer_slice.height))
canvas.paste(footer_crop, (0, footer_y + HEADER_HEIGHT))

canvas.save(OUTPUT, optimize=True)
print(OUTPUT)
