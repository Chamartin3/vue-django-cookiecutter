import os

def install_dependencies():
    os.system('./install_dependencies.sh')
def git_commands():
    os.system('./git_commands.sh')


def main():
    install_dependencies()
    git_commands()

if __name__ == '__main__':
    main()
