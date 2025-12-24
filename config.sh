#!/bin/bash

folders=(
  "blogs"
  "blogs/coding-adventures"
  "blogs/coding-adventures/c-sharp"
  "blogs/coding-adventures/c-sharp/handling-3rd-party-dependencies-in-clean-architecture"
  "work-experience"
)

for folder in "${folders[@]}"; do
  mkdir -p "dist/$folder"

  destination="dist/$folder/index.html"
  if [ ! -f "$destination" ]; then
    cp "dist/index.html" "$destination"
  fi
done

# Create CNAME file
if [ ! -f "dist/CNAME" ]; then
  echo "idjazhossanee.com" > "dist/CNAME"
fi
