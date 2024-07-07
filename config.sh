#!/bin/bash

# Define the array of folder paths
folders=("blogs" "work-experience")

# Function to create folders recursively
function New-FolderStructure {
    local path=$1
    IFS='/' read -ra path_segments <<< "$path"
    currentPath=""
    for folder in "${path_segments[@]}"; do
        if [ -z "$currentPath" ]; then
            currentPath="$folder"
        else
            currentPath="$currentPath/$folder"
        fi
        if [ ! -d "$currentPath" ]; then
            mkdir -p "$currentPath"
        fi
    done
}

# Create folders and copy index.html
for folder in "${folders[@]}"; do
    New-FolderStructure "dist/$folder"
    indexPath="dist/index.html"
    destinationPath="dist/$folder/index.html"
    if [ ! -e "$destinationPath" ]; then
        cp "$indexPath" "$destinationPath"
    fi
done

# Create CNAME file
cnamePath="dist/CNAME"
if [ ! -e "$cnamePath" ]; then
    echo "idjazhossanee.com" > "$cnamePath"
fi
