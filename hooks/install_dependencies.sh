echo "Installing Python Dependencies"
python3 -m virtualenv .env
source .env/bin/activate
pip3 install -r requirements.txt

echo "Installing Node Dependencies"
npm i
