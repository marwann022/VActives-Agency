from pathlib import Path
from PIL import Image, ImageOps, ImageDraw

ROOT = Path(__file__).parent

def panel(path, size):
    image = Image.open(ROOT / path).convert("RGB")
    image.thumbnail(size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", size, "white")
    canvas.paste(image, ((size[0] - image.width) // 2, (size[1] - image.height) // 2))
    return canvas

def compare(left_path, right_path, output, labels):
    cell = (900, 620)
    header = 54
    canvas = Image.new("RGB", (cell[0] * 2, cell[1] + header), "white")
    draw = ImageDraw.Draw(canvas)
    draw.text((24, 17), labels[0], fill="#12372F")
    draw.text((cell[0] + 24, 17), labels[1], fill="#12372F")
    canvas.paste(panel(left_path, cell), (0, header))
    canvas.paste(panel(right_path, cell), (cell[0], header))
    canvas.save(ROOT / output, quality=92)

compare(
    "reference-hero.png",
    "implementation-hero-raised.png",
    "comparison-hero-raised.jpg",
    ("Reference direction", "VActives implementation — illustration raised"),
)
compare(
    "reference-journey-strip.png",
    "implementation-journey-one.png",
    "comparison-journey-redesign.jpg",
    ("Original compact journey reference", "New alternating scroll story — ONE"),
)
