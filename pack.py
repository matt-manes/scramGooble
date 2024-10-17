import subprocess

from pathier import Pathier


def main():
    """Pack files listed in `packlist.txt` into a `.zip` file using `jar` utility."""
    target_name = "scramGooble.zip"
    print("Reading `packlist.txt`...")
    files = Pathier("packlist.txt").split()
    print(f"Packing files into `{target_name}`...")
    subprocess.run(["jar", "-cfM", target_name] + files)
    print("Packing complete.")


if __name__ == "__main__":
    main()
