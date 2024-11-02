import os
import subprocess


def convert_png_to_webp(folder):
    for root, _, files in os.walk(folder):
        for file in files:
            if file.lower().endswith('.png') or file.lower().endswith('.jpeg') or file.lower().endswith('.jpg'):
                png_path = os.path.join(root, file)
                webp_path = os.path.splitext(png_path)[0] + '.webp'

                # Run cwebp command
                subprocess.run(['cwebp', '-q', '40', png_path, '-o', webp_path])

                # Delete the original PNG file
                os.remove(png_path)
                print(f"Converted and deleted: {png_path}")


if __name__ == "__main__":
    folder = input("Enter the path to the folder: ")
    convert_png_to_webp(folder)
