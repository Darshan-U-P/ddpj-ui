import os
import shutil
from PIL import Image

SOURCE_DIR = "logo_source"
OUTPUT_DIR = "assets"

ICON_SIZES = [512,256,128,64,32]

def create_structure():
    folders = [
        "assets/logo/master",
        "assets/logo/logo",
        "assets/logo/icons",
        "assets/logo/installer",
        "assets/logo/github",
        "assets/website"
    ]
    for folder in folders:
        os.makedirs(folder, exist_ok=True)

def copy_png_icons():
    for size in ICON_SIZES:
        src = f"{SOURCE_DIR}/icon-{size}.png"
        dst = f"{OUTPUT_DIR}/logo/icons/icon-{size}.png"
        if os.path.exists(src):
            shutil.copy(src, dst)
        else:
            print(f"Warning: {src} not found. Skipping.")

def generate_ico():
    images = []
    for size in ICON_SIZES:
        path = f"{SOURCE_DIR}/icon-{size}.png"
        if os.path.exists(path):
            images.append(Image.open(path))
        else:
            print(f"Warning: {path} not found. Skipping for ICO.")
    if images:
        ico_path = f"{OUTPUT_DIR}/logo/icons/icon.ico"
        images[0].save(ico_path, format='ICO', sizes=[(s, s) for s in ICON_SIZES if os.path.exists(f"{SOURCE_DIR}/icon-{s}.png")])
    else:
        print("No images found for ICO generation.")

def generate_favicon():
    src = f"{SOURCE_DIR}/icon-32.png"
    dst = f"{OUTPUT_DIR}/website/favicon.ico"
    if os.path.exists(src):
        img = Image.open(src)
        img.save(dst)
    else:
        print(f"Warning: {src} not found. Skipping favicon.")

def generate_installer_icon():
    src = f"{SOURCE_DIR}/icon-256.png"
    dst = f"{OUTPUT_DIR}/logo/installer/installer-icon.ico"
    if os.path.exists(src):
        img = Image.open(src)
        img.save(dst)
    else:
        print(f"Warning: {src} not found. Skipping installer icon.")

def generate_svg_placeholder():
    svg_content = """<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\"><image href=\"../icons/icon-512.png\" width=\"512\" height=\"512\"/></svg>\n"""
    with open(f"{OUTPUT_DIR}/logo/logo/ddpj-logo.svg", "w") as f:
        f.write(svg_content)

def main():
    print("Creating folder structure...")
    create_structure()

    print("Copying PNG icons...")
    copy_png_icons()

    print("Generating ICO...")
    generate_ico()

    print("Generating favicon...")
    generate_favicon()

    print("Generating installer icon...")
    generate_installer_icon()

    print("Generating SVG placeholder...")
    generate_svg_placeholder()

    print("Assets generated successfully!")

if __name__ == "__main__":
    main()
