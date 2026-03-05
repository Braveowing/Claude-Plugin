---
name: push-skill-to-github
description: This skill should be used when the user asks to "push skill to github", "publish skill to github", "upload skill to repository", "push plugin to github", or wants to push a locally created skill to a GitHub repository. Automatically pushes to the configured GitHub repository with proper git configuration.
version: 1.0.0
---

# Push Skill to GitHub

This skill handles pushing Claude Code plugin skills to GitHub repositories. By default, it pushes to the `Braveowing/Claude-Plugin` repository.

## Configuration

### Default Settings
- **Local Path**: `D:\AI Project\Claude code\skills`
- **GitHub Repository**: `Braveowing/Claude-Plugin`
- **Branch**: `master`

### Customizing Configuration

To modify the default repository or local path, update the following variables in your workflow:

```
Local Path: Adjust the source directory containing your skills
GitHub Repo: Change the target repository (owner/repo format)
Branch: Modify if using a different branch (default: master)
```

## Workflow

### Step 1: Verify Local Git Repository

Check if the local path is already a git repository:

```bash
cd "<local-path>" && git status
```

If not a git repository, initialize it:

```bash
cd "<local-path>" && git init
```

### Step 2: Configure Git User (If Needed)

Set git user identity if not already configured:

```bash
cd "<local-path>" && git config user.name "<your-username>"
git config user.email "<your-email>"
```

### Step 3: Add Remote Repository

If remote is not configured:

```bash
cd "<local-path>" && git remote add origin https://github.com/<owner>/<repo>.git
```

### Step 4: Stage Files

Add files to staging area:

```bash
cd "<local-path>" && git add .
```

Or add a specific skill directory:

```bash
cd "<local-path>" && git add <skill-name>/
```

### Step 5: Create Commit

Commit the changes with a descriptive message:

```bash
cd "<local-path>" && git commit -m "Add <skill-name> skill"
```

### Step 6: Push to GitHub

Push the changes to the remote repository:

```bash
cd "<local-path>" && git push -u origin master
```

For existing branches:

```bash
cd "<local-path>" && git push origin master
```

## Handling Push Errors

### Authentication Errors

If authentication fails:
1. Ensure GitHub credentials are configured
2. Use `git credential reject` to clear invalid credentials
3. Re-run the push command

### Network Errors

If network connection fails:
1. Check internet connectivity
2. Verify firewall/proxy settings
3. Try again or use VPN if available

### Merge Conflicts

If remote has newer changes:
1. Pull remote changes first: `git pull origin master`
2. Resolve conflicts manually
3. Commit and push again

## Complete Workflow Example

```
User: "Push my new skill to GitHub"

You:
1. Determine the skill name and local path
2. Run: cd "D:\AI Project\Claude code\skills" && git status
3. If not a repo: git init && git remote add origin https://github.com/Braveowing/Claude-Plugin.git
4. git add <skill-name>/
5. gitAdd <skill-name commit -m "> skill"
6. git push -u origin master
7. Confirm success to user
```

## Multiple Skills Workflow

When pushing multiple skills:

```bash
# Add all skills
cd "D:\AI Project\Claude code\skills" && git add .

# Or add specific skills
cd "D:\AI Project\Claude code\skills" && git add skill-a/ skill-b/

# Commit and push
git commit -m "Add multiple skills: skill-a, skill-b"
git push -u origin master
```

## Updating Existing Skills

To update a skill that was previously pushed:

```bash
cd "D:\AI Project\Claude code\skills"

# Make changes to the skill files
# Then stage, commit, and push

git add <skill-name>/
git commit -m "Update <skill-name> skill: describe changes"
git push -u origin master
```

## Git Configuration

### User Information

Set globally (recommended):

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Or set locally for specific repository:

```bash
cd "D:\AI Project\Claude code\skills"
git config user.name "Your Name"
git config user.email "your@email.com"
```

### Credential Helper

Configure credential storage:

```bash
git config --global credential.helper store
```

This stores credentials in `~/.git-credentials`.

## Quality Checklist

Before pushing:

- [ ] Verify all intended files are staged
- [ ] Review commit message for clarity
- [ ] Confirm remote repository URL is correct
- [ ] Test network connectivity to GitHub

After pushing:

- [ ] Confirm push completed without errors
- [ ] Verify files appear in GitHub repository
- [ ] Share repository URL with user

## Common Commands Reference

| Action | Command |
|--------|---------|
| Initialize repo | `git init` |
| Add remote | `git remote add origin <url>` |
| Stage all files | `git add .` |
| Stage specific folder | `git add <folder>/` |
| Commit changes | `git commit -m "message"` |
| Push to remote | `git push -u origin master` |
| Pull from remote | `git pull origin master` |
| Check status | `git status` |
| View remote URL | `git remote -v` |

## Additional Resources

- GitHub Documentation: https://docs.github.com
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
