# PowerShell script to set up MCP configuration for new projects
# Run this script in any new project directory

Write-Host "Setting up MCP configuration..." -ForegroundColor Green

# Create .cursor directory if it doesn't exist
if (!(Test-Path ".cursor")) {
    New-Item -ItemType Directory -Path ".cursor" -Force
    Write-Host "Created .cursor directory" -ForegroundColor Yellow
}

# Create mcp.json configuration
$mcpConfig = @{
    mcpServers = @{
        "shadcn-ui" = @{
            command = "npx"
            args = @("-y", "shadcn-ui-mcp-server")
            env = @{}
        }
        "shadcn-ui-custom" = @{
            command = "npx"
            args = @("@jpisnice/shadcn-ui-mcp-server", "--github-api-key", "env.GITHUB_API_KEY")
            env = @{}
        }
    }
}

# Convert to JSON and save
$mcpConfig | ConvertTo-Json -Depth 10 | Out-File -FilePath ".cursor/mcp.json" -Encoding UTF8

Write-Host "MCP configuration created at .cursor/mcp.json" -ForegroundColor Green
Write-Host "Restart Cursor to load the new MCP servers!" -ForegroundColor Yellow 