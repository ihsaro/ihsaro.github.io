# Define the array of folder paths
$folders = @('blogs', 'work-experience')

# Function to create folders recursively
function New-FolderStructure {
    param (
        [string]$path
    )

    $folders = $path -split '/'
    $currentPath = $null
    foreach ($folder in $folders) {
        if (-not $currentPath) {
            $currentPath = $folder
        } else {
            $currentPath += "\" + $folder
        }
        if (-not (Test-Path $currentPath)) {
            New-Item -ItemType Directory -Path $currentPath | Out-Null
        }
    }
}

# Create folders and copy index.html
foreach ($folder in $folders) {
    New-FolderStructure -path "dist\$folder"
    $indexPath = "dist\index.html"
    $destinationPath = "dist\$folder\index.html"
    if (-not (Test-Path $destinationPath)) {
        Copy-Item -Path $indexPath -Destination $destinationPath
    }
}

# Create CNAME file
$cnamePath = "dist\CNAME"
if (-not (Test-Path $cnamePath)) {
    Set-Content -Path $cnamePath -Value "idjazhossanee.com"
}
