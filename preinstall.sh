PUBLIC_DIR="public/build"

if [ -d "$PUBLIC_DIR" ]; then
  ### Take action if $DIR exists ###
  echo "Dir found, this should go smoothly"
else
  ###  Control will jump here if $DIR does NOT exists ###
  echo "Error: ${PUBLIC_DIR} not found. Creating folder for you "
  mkdir public/build
  exit 0
fi