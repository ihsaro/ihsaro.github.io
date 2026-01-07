#!/bin/bash

folders=(
  "blogs"
  "blogs/product-adventures"
  "blogs/product-adventures/batchie-tab"
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
