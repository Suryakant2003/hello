# Samavya
My personal project

## Installation

**Prerequisites:**

* Python 3.x

**Installation:**

1. Clone this repository.
2. Make a virtual Environment

    ## For Windows
    ```bash
    pip install virtualenv
    ```

    ```bash
    python -m venv dev
    dev\Scripts\activate
    ```

    ## For Linux/MacOS

    ```bash
    sudo apt install python3-venv
    ```

    ```bash
    python3 -m venv dev
    source dev/bin/activate
    ```
3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. To start Development server:

    ```bash
    python manage.py runserver
    ```