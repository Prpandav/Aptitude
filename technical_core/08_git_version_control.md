# Git and Version Control Master Notes

Simple notes for learning Git, daily development, aptitude tests, and technical interviews.

## Table of Contents

1. [Version Control Basics](#1-version-control-basics)
2. [Git Basics](#2-git-basics)
3. [Setup and Configuration](#3-setup-and-configuration)
4. [Repository and File States](#4-repository-and-file-states)
5. [Core Git Commands](#5-core-git-commands)
6. [Commits and History](#6-commits-and-history)
7. [Branches](#7-branches)
8. [Merging](#8-merging)
9. [Rebasing](#9-rebasing)
10. [Remote Repositories](#10-remote-repositories)
11. [Fetch, Pull, and Push](#11-fetch-pull-and-push)
12. [Undoing Changes Safely](#12-undoing-changes-safely)
13. [Reset, Revert, and Restore](#13-reset-revert-and-restore)
14. [Stashing](#14-stashing)
15. [Tags and Releases](#15-tags-and-releases)
16. [Merge Conflicts](#16-merge-conflicts)
17. [Git Workflows](#17-git-workflows)
18. [Pull Requests and Code Review](#18-pull-requests-and-code-review)
19. [Useful Advanced Commands](#19-useful-advanced-commands)
20. [Git Internals](#20-git-internals)
21. [.gitignore and .gitattributes](#21-gitignore-and-gitattributes)
22. [Submodules and Monorepos](#22-submodules-and-monorepos)
23. [Hooks and Automation](#23-hooks-and-automation)
24. [Security and Signed Work](#24-security-and-signed-work)
25. [Team Best Practices](#25-team-best-practices)
26. [Troubleshooting](#26-troubleshooting)
27. [Interview Questions](#27-interview-questions)
28. [MCQ Practice](#28-mcq-practice)
29. [Practical Exercises](#29-practical-exercises)
30. [Common Mistakes and Interview Tips](#30-common-mistakes-and-interview-tips)
31. [Rapid-Revision Cheat Sheet](#31-rapid-revision-cheat-sheet)

---

## 1. Version Control Basics

Version control records changes made to files over time. It helps a team work together and return to an older correct version.

### Why version control is useful

- It keeps the history of a project.
- It shows who changed a file and why.
- It allows many developers to work at the same time.
- It supports safe experiments through branches.
- It helps review, compare, and undo changes.

Version control is not a complete backup system. Important repositories should still have secure remote copies and backups.

### Types of version control

| Type | Meaning | Main point |
|---|---|---|
| Local | History stays on one computer | Simple, but poor for teamwork |
| Centralized | One main server stores history | Easy control, but server can be a single failure point |
| Distributed | Every clone has full history | Fast local work and better offline support |

Git is a distributed version control system.

### Important terms

- **Repository:** Project files and their recorded history.
- **Commit:** A saved snapshot with a message and author details.
- **Branch:** A movable name pointing to a line of development.
- **Merge:** Combines work from different branches.
- **Conflict:** Happens when Git cannot combine changes automatically.
- **Remote:** Another copy of the repository, usually on a server.
- **Clone:** A local copy of a remote repository.

---

## 2. Git Basics

Git was created for fast and distributed source-code management. Most operations work locally.

### Git and GitHub are different

- **Git** is the version control software.
- **GitHub, GitLab, and Bitbucket** are services that host Git repositories and add collaboration tools.

### Basic Git flow

```text
Working directory -> Staging area -> Local repository -> Remote repository
       git add          git commit          git push
```

- The **working directory** contains files you edit.
- The **staging area**, also called the index, holds changes for the next commit.
- The **local repository** stores committed history on your computer.
- A **remote repository** is shared over a network.

Git mainly stores snapshots. If a file does not change, Git can refer to its earlier content instead of storing the same content again.

---

## 3. Setup and Configuration

Check the installed version:

```bash
git --version
```

Set the identity written into new commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

View configuration:

```bash
git config --list
git config --global --list
git config --local --list
```

### Configuration levels

| Level | Scope | Common option |
|---|---|---|
| System | Every user on the computer | `--system` |
| Global | Current user | `--global` |
| Local | Current repository | `--local` |

A more specific level normally overrides a broader level. Local settings override global settings.

Useful settings:

```bash
git config --global init.defaultBranch main
git config --global core.editor "code --wait"
git config --show-origin --list
```

Use a valid email. Some hosting services provide a private no-reply email.

---

## 4. Repository and File States

Create an empty repository inside the current folder:

```bash
git init
```

Copy an existing repository:

```bash
git clone https://example.com/team/project.git
```

### Common file states

| State | Meaning |
|---|---|
| Untracked | Git has not started tracking the file |
| Unmodified | Tracked file matches the last commit |
| Modified | Tracked file has local changes |
| Staged | Change is selected for the next commit |
| Committed | Snapshot is stored in local history |
| Ignored | A rule tells Git not to track the file |

Check the current state often:

```bash
git status
git status --short
```

Short status uses symbols such as `??` for untracked files and `M` for modified files. Its two columns describe the staging area and working directory.

---

## 5. Core Git Commands

Stage one file or all changes:

```bash
git add notes.md
git add .
```

Select only some parts of a changed file:

```bash
git add -p
```

Create a commit:

```bash
git commit -m "Add Git basics"
```

Compare changes:

```bash
git diff
git diff --staged
git diff HEAD
```

- `git diff` shows unstaged changes.
- `git diff --staged` shows staged changes.
- `git diff HEAD` shows all current changes against the last commit.

Rename or remove tracked files:

```bash
git mv old-name.md new-name.md
git rm unused.md
```

Git understands a rename by comparing content; a rename is not stored as a special file operation.

---

## 6. Commits and History

A good commit contains one clear change. It should leave the project in a usable state.

View history:

```bash
git log
git log --oneline --graph --decorate --all
git show HEAD
git show <commit-id>
```

`HEAD` usually points to the current branch, and that branch points to the latest current commit. `HEAD~1` means its first parent.

### Good commit messages

- Use a short action sentence: `Fix login validation`.
- Explain why when the reason is not clear.
- Avoid messages such as `changes`, `work`, or `final`.
- Keep unrelated work in separate commits.

Change the latest local commit:

```bash
git commit --amend
git commit --amend --no-edit
```

Amend creates a new commit identity. Avoid amending a shared commit unless the team agrees.

---

## 7. Branches

A branch is a lightweight movable pointer to a commit. It allows work to continue without changing another branch.

```bash
git branch
git branch --all
git switch -c feature/search
git switch main
git branch -d feature/search
```

- `-d` deletes a branch only when Git sees it as merged.
- `-D` forces deletion and can lose easy access to work.
- Creating a branch does not copy all project files.

### Detached HEAD

Detached HEAD means `HEAD` points directly to a commit instead of a branch. New commits may become hard to find after switching away. Create a branch to keep them:

```bash
git switch -c keep-my-work
```

Use clear branch names such as `feature/payment`, `fix/login-timeout`, or `docs/git-notes`.

---

## 8. Merging

Merge combines histories. First switch to the branch that should receive the work.

```bash
git switch main
git merge feature/search
```

### Main merge types

| Type | Meaning |
|---|---|
| Fast-forward | Current branch moves forward because it has no separate commits |
| Three-way merge | Git uses two branch tips and their common ancestor |
| Squash merge | Changes are combined into one new commit without keeping the branch relationship |

```bash
git merge --ff-only feature/search
git merge --no-ff feature/search
git merge --abort
```

`--ff-only` refuses a merge that needs a merge commit. `--no-ff` records a merge commit even when fast-forward is possible.

---

## 9. Rebasing

Rebase moves or replays commits onto a new base. It can create a simple linear history.

```bash
git switch feature/search
git rebase main
```

The replayed commits get new IDs because their parent history changes.

```bash
git add resolved-file.md
git rebase --continue
git rebase --abort
git rebase -i HEAD~4
```

Interactive rebase can reorder, edit, squash, or remove local commits. Do not casually rebase commits already used by other people.

| Merge | Rebase |
|---|---|
| Preserves the original branch history | Rewrites selected commits |
| May add a merge commit | Often creates a linear history |
| Safe and clear for shared work | Useful for cleaning private local work |

---

## 10. Remote Repositories

A remote is a named connection to another repository.

```bash
git remote -v
git remote add origin https://example.com/team/project.git
git remote show origin
git remote remove origin
```

`origin` is only a common default name. In fork-based work, `origin` often points to your fork and `upstream` points to the main project.

A remote-tracking branch such as `origin/main` is the local record of the remote branch at the last network update. It is not the same as local `main`.

- HTTPS commonly uses a credential manager or access token.
- SSH uses a public and private key pair.
- Never put a password, private key, or token in a repository.

---

## 11. Fetch, Pull, and Push

```bash
git fetch origin
git pull origin main
git push origin main
git push -u origin feature/search
```

- **Fetch** downloads new objects and updates remote-tracking names.
- **Pull** fetches and then integrates changes by merge or rebase.
- **Push** sends local objects and updates an allowed remote branch.
- `-u` sets the upstream tracking relationship.

A push may be rejected when the remote has work missing locally. Fetch it, review it, integrate it, test, and then push again. Do not force-push only to hide the rejection.

---

## 12. Undoing Changes Safely

Before undoing anything, inspect the current state:

```bash
git status
git diff
git diff --staged
git log --oneline -10
```

Ask whether the change is unstaged, staged, committed, or already shared. Prefer an operation that keeps history when work is shared. Before risky cleanup, make a temporary branch:

```bash
git branch backup-before-cleanup
```

---

## 13. Reset, Revert, and Restore

```bash
git restore app.js
git restore --staged app.js
git restore --source=<commit-id> app.js
```

- The first command discards unstaged edits.
- The second unstages the file but keeps its edits.
- The third takes content from another commit.

```bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

| Mode | Branch pointer | Staging area | Working directory |
|---|---|---|---|
| Soft | Moves | Keeps changes staged | Keeps changes |
| Mixed | Moves | Unstages changes | Keeps changes |
| Hard | Moves | Replaces content | Replaces content |

`--hard` can destroy uncommitted work. Check carefully before using it.

```bash
git revert <commit-id>
git reflog
git switch -c recovered-work <commit-id>
```

Revert creates a new commit with the opposite change, so it is normally safer for shared history. Reflog records recent local reference movements and may recover a lost commit, but its entries are not permanent.

---

## 14. Stashing

Stash temporarily stores changes so the working directory can become clean.

```bash
git stash
git stash list
git stash apply
git stash pop
```

`apply` keeps the stash entry. `pop` removes it after a successful apply. A stash is temporary local storage, not a place for long-term work.

---

## 15. Tags and Releases

A tag is a fixed name for an important commit, often a released version.

```bash
git tag
git tag v1.0.0
git tag -a v1.1.0 -m Release-v1.1.0
git show v1.1.0
git push origin v1.1.0
```

A lightweight tag is only a pointer. An annotated tag also stores a message, tagger, date, and optional signature. Tags do not move automatically like branches.

---

## 16. Merge Conflicts

A conflict happens when Git cannot decide how to combine changes. This is normal in teamwork.

```text
<<<<<<< HEAD
current branch text
=======
incoming branch text
>>>>>>> feature/search
```

1. Read `git status`.
2. Open every conflicted file and understand both versions.
3. Edit it to the correct final result.
4. Remove the markers and test.
5. Stage the file and continue.

```bash
git add resolved-file.md
git commit
git rebase --continue
```

Use `git merge --abort` or `git rebase --abort` to cancel the unfinished operation.

---

## 17. Git Workflows

A workflow gives a team shared rules for branches, reviews, and releases.

| Workflow | Simple idea | Suitable for |
|---|---|---|
| Trunk-based | Integrate small changes into main often | Continuous delivery |
| Feature branch | Develop each change in a short branch | Many application teams |
| Git Flow | Use develop, feature, release, and hotfix branches | Scheduled releases |
| Forking | Contributors work through personal forks | Open-source projects |

No workflow is best for every team. Choose based on release frequency, team size, risk, and automation.

---

## 18. Pull Requests and Code Review

A pull request proposes that a branch should be reviewed and merged. It is a hosting-service feature, not a core Git command.

A useful pull request has a clear reason, focused changes, test results, related issue, and risk notes. During review, check requirements, clarity, edge cases, tests, security, and documentation.

Review the work, not the person. Comments should be clear, respectful, and actionable.

---

## 19. Useful Advanced Commands

### Cherry-pick

```bash
git cherry-pick <commit-id>
```

Cherry-pick copies the change from selected commits onto the current branch. Use it for a specific fix, not as the normal way to combine whole branches.

### Bisect

```bash
git bisect start
git bisect bad
git bisect good <old-commit>
git bisect reset
```

Bisect uses binary search to find the commit that introduced a bug. Mark each tested commit good or bad.

### Other useful tools

```bash
git blame app.js
git log -S searchText
git log -- path/to/file
git worktree add ../hotfix hotfix
git clean -n
```

- `blame` shows the last commit for each line; use it to understand history, not blame people.
- `log -S` finds commits where the number of a text string changed.
- `worktree` checks out another branch in another folder.
- `clean -n` previews untracked files that a clean would remove. Run destructive clean options only after careful review.

---

## 20. Git Internals

Git stores content in the `.git` directory. Its main objects are:

| Object | Stores |
|---|---|
| Blob | File content |
| Tree | Directory names and links to blobs or trees |
| Commit | Root tree, parent commits, author, date, and message |
| Annotated tag | A named reference with tag information |

Objects are content-addressed. Their IDs come from their content. Modern repositories may use SHA-1 or SHA-256 depending on repository format.

Branches, tags, and remote-tracking names are references. Commits form a directed acyclic graph because each commit points to parent commits and history does not form a cycle.

The index is the planned content of the next commit. Git may later remove unreachable objects through garbage collection.

---

## 21. .gitignore and .gitattributes

`.gitignore` lists paths Git should normally leave untracked.

```gitignore
node_modules/
.env
*.log
build/
!.env.example
```

Ignore rules do not stop tracking a file already committed. Remove it only from the index when it should stay locally:

```bash
git rm --cached .env
```

If the file contained a secret, also rotate the secret. Removing the file now does not erase it from old history.

`.gitattributes` controls path-based behavior such as line endings, diff handling, and binary-file treatment.

```gitattributes
* text=auto
*.sh text eol=lf
*.png binary
```

---

## 22. Submodules and Monorepos

A submodule records one repository inside another by a specific commit.

```bash
git submodule add <repository-url> libs/tool
git submodule update --init --recursive
```

Submodules keep histories separate but require users to update both the parent pointer and nested repository correctly.

A monorepo stores many related projects in one repository. It gives one review and history space, but can need strong build tools, ownership rules, and access planning. Separate repositories give stronger independence but make cross-project changes harder.

---

## 23. Hooks and Automation

Hooks run scripts at Git events such as before a commit or after receiving a push. Client hooks can format code or catch simple mistakes.

Local hooks are not copied automatically when a repository is cloned. Important rules must also run in shared CI or on the server. A developer can bypass many client hooks, so they are helpful checks, not a security boundary.

Typical automation includes:

- Formatting and static analysis.
- Unit, integration, and security tests.
- Build and packaging checks.
- Commit or branch policy checks.
- Release and deployment jobs.

---

## 24. Security and Signed Work

- Never commit passwords, tokens, private keys, or private customer data.
- Use environment variables and an approved secret manager.
- Give users and automation only the access they need.
- Protect important branches with review and status checks.
- Review dependency and workflow-file changes carefully.

If a secret is committed, revoke or rotate it first. Deleting the current file is not enough because old commits may still contain it. History cleanup requires team coordination because it changes commit IDs.

Commits and annotated tags can be signed using supported signing methods. Verification gives evidence that a trusted key signed an object; it does not prove that the code is correct or safe.

---

## 25. Team Best Practices

- Pull or fetch before starting important work.
- Keep branches short-lived and focused.
- Commit small logical changes with useful messages.
- Review the staged diff before every commit.
- Test before pushing and before merging.
- Use pull requests for important shared branches.
- Do not rewrite shared history without agreement.
- Prefer `--force-with-lease` over plain force when an approved force-push is required.
- Remove merged branches and stale worktrees.
- Document the branch, release, and emergency-fix rules.
- Keep generated files and large binaries out unless the project needs them.

`--force-with-lease` checks that the remote reference still has the expected value. It is safer than plain `--force`, but it can still rewrite history.

---

## 26. Troubleshooting

### Push rejected

Fetch the remote changes, inspect them, merge or rebase as agreed, test, and push again.

### Wrong branch commit

If it is local, create the correct branch at that commit, then move the old branch carefully. If shared, prefer a revert and a new correct commit.

### Accidentally deleted branch

Use `git reflog` to find its latest commit and create a new branch there.

### Cannot switch branches

Git may protect local edits that would be overwritten. Commit them, stash them, or intentionally restore them.

### Line-ending changes everywhere

Check editor settings, Git configuration, and `.gitattributes`. Agree on repository rules before normalizing files.

### Large file was committed

Removing it in a later commit does not reduce old history. Use an approved history-rewrite tool only with team planning, then update every clone.

### Command is still in progress

Read `git status`. It usually explains whether a merge, rebase, revert, or cherry-pick needs a continue, skip, or abort command.

---

## 27. Interview Questions

### 1. What is Git?

Git is a distributed version control system that records project snapshots and supports branches, merging, and teamwork.

### 2. How is Git different from GitHub?

Git is the version control tool. GitHub is a hosting and collaboration service built around Git repositories.

### 3. Why is Git called distributed?

Every normal clone contains project files and repository history, so many history operations work offline.

### 4. What is the staging area?

It is the index that holds the exact changes planned for the next commit.

### 5. What is a commit?

A commit is an object that records a project tree, parent commit or commits, author information, time, and message.

### 6. What is HEAD?

HEAD normally points to the current branch, which points to the current commit. It can also point directly to a commit in detached mode.

### 7. What is a branch?

A branch is a movable reference to a commit. It moves when a new commit is made on that branch.

### 8. What is a fast-forward merge?

It moves the current branch pointer forward when there is no separate work to combine.

### 9. What is a three-way merge?

It compares two branch tips and their common ancestor, then creates a combined result and usually a merge commit.

### 10. What is the difference between merge and rebase?

Merge joins histories and preserves their shape. Rebase replays commits on a new base and gives them new identities.

### 11. Why should shared commits not be rebased casually?

Rebase changes commit IDs. Other developers may still have the old history, causing confusing duplicate work and difficult integration.

### 12. What is the difference between fetch and pull?

Fetch downloads remote information without integrating it into the current branch. Pull fetches and then merges or rebases.

### 13. What is origin?

It is the usual default name for the remote from which a repository was cloned. The name has no special technical power.

### 14. What is a remote-tracking branch?

It is a local record, such as `origin/main`, of a remote branch from the last fetch or pull.

### 15. Reset versus revert?

Reset moves a reference and may change the index or files. Revert adds a new opposite commit, making it safer for public history.

### 16. Restore versus reset?

Restore mainly changes working-tree or staged file content. Reset moves a branch or HEAD and can also update the index and files.

### 17. What is reflog?

Reflog is a local record of recent reference movements. It often helps recover commits that are no longer visible from a branch.

### 18. What is cherry-pick?

It applies the change introduced by selected commits onto the current branch as new commits.

### 19. What does git bisect do?

It uses binary search between known good and bad commits to find where a bug first appeared.

### 20. What is a detached HEAD?

HEAD points directly to a commit rather than a branch. Create a branch before leaving if new commits must remain easy to find.

### 21. Does .gitignore remove tracked files?

No. Ignore rules normally affect untracked paths. A tracked file must first be removed from the index if it should become ignored.

### 22. What is a merge conflict?

It is a situation where Git needs a person to decide the correct combined content.

### 23. What is a tag?

A tag is a fixed reference commonly used to mark a release. Annotated tags also store extra information.

### 24. What is the difference between author and committer?

The author originally created a change. The committer last created the commit object, which may differ after applying or rebasing work.

### 25. Why are commit IDs changed by amend?

The commit content includes metadata and parent links. Amend creates a different commit object, so its content-based ID changes.

---

## 28. MCQ Practice

### 1. Which area holds changes selected for the next commit?

A. Remote  
B. Staging area  
C. Tag  
D. Reflog

### 2. Which command downloads remote history without merging it?

A. `git fetch`  
B. `git pull`  
C. `git push`  
D. `git commit`

### 3. Which command is usually safest for undoing a shared commit?

A. `git reset --hard`  
B. `git clean -f`  
C. `git revert`  
D. `git branch -D`

### 4. Which object stores file content?

A. Tree  
B. Blob  
C. Branch  
D. Remote

### 5. What normally moves when a commit is created?

A. Current branch  
B. Every tag  
C. Every remote  
D. Stash

### 6. Which command shows unstaged changes?

A. `git diff`  
B. `git log`  
C. `git tag`  
D. `git clone`

### 7. What does rebase normally do?

A. Deletes the remote  
B. Replays commits on a new base  
C. Encrypts commits  
D. Creates a repository

### 8. Which option previews untracked files that clean may remove?

A. `git clean -n`  
B. `git clean -f`  
C. `git reset --hard`  
D. `git rm`

### 9. Which name commonly points to the cloned remote?

A. HEAD  
B. main  
C. origin  
D. index

### 10. Which command may help recover a commit after a mistaken reset?

A. `git reflog`  
B. `git ignore`  
C. `git init`  
D. `git config`

### 11. Which tag contains tagger data and a message?

A. Moving tag  
B. Annotated tag  
C. Remote tag  
D. Staged tag

### 12. What does `git restore --staged file` normally do?

A. Deletes the file  
B. Pushes the file  
C. Unstages it while keeping its working changes  
D. Creates a tag

### 13. What is a pull request?

A. A core Git object  
B. A hosting-service review and merge proposal  
C. A local stash  
D. A configuration level

### 14. Which workflow integrates small changes into main very often?

A. Trunk-based development  
B. No version control  
C. Manual backup  
D. Detached HEAD

### 15. What should happen first after a committed secret is found?

A. Add a tag  
B. Rotate or revoke the secret  
C. Rename the branch  
D. Squash every commit

<details>
<summary>Answer key</summary>

1. B — The staging area plans the next commit.  
2. A — Fetch downloads updates without direct integration.  
3. C — Revert keeps shared history and adds an opposite commit.  
4. B — A blob stores file content.  
5. A — The checked-out branch advances to the new commit.  
6. A — Plain diff compares working content with the index.  
7. B — Rebase replays commits and changes their IDs.  
8. A — The dry-run option shows the possible removal first.  
9. C — Origin is the common default remote name.  
10. A — Reflog records recent local reference movement.  
11. B — An annotated tag stores tag information.  
12. C — It changes the index while preserving working edits.  
13. B — Pull requests belong to hosting platforms.  
14. A — Trunk-based teams integrate into the trunk frequently.  
15. B — Rotation limits further use of the exposed secret.

</details>

---

## 29. Practical Exercises

### Exercise 1: First repository

Create a folder, initialize Git, add two files, stage them, commit them, and inspect the log.

### Exercise 2: Selective staging

Make two different edits in one file. Use `git add -p` to place them in separate commits.

### Exercise 3: Branch and merge

Create a feature branch, commit a change, return to main, and merge the branch. Draw the history before and after.

### Exercise 4: Resolve a conflict

Change the same line differently on two branches, merge them, resolve the conflict, test, and commit.

### Exercise 5: Safe undo

Create three commits. Revert the second commit and explain why the third commit remains in history.

### Exercise 6: Reset comparison

In a disposable repository, test soft, mixed, and hard reset. Record what happens to the branch, index, and files.

### Exercise 7: Stash work

Make tracked and untracked changes, stash them with `-u`, switch branches, then restore the stash.

### Exercise 8: Remote teamwork

Clone a practice repository, create a branch, push it with an upstream, and compare local main with `origin/main`.

### Exercise 9: Find a bug

Create several commits where one introduces a failing test. Use `git bisect` to identify it.

### Exercise 10: Recover work

Create a commit, move the branch away with reset, find the commit in reflog, and recover it using a new branch.

Always use a disposable practice repository for destructive-command exercises.

---

## 30. Common Mistakes and Interview Tips

### Common mistakes

- Running `git add .` without reviewing included files.
- Writing unclear commit messages.
- Mixing unrelated changes in one commit.
- Using hard reset or clean without a preview or backup.
- Force-pushing a shared branch.
- Rebasing public commits without team agreement.
- Committing secrets, build output, or large temporary files.
- Resolving conflict markers without understanding both changes.
- Treating a stash as permanent storage.
- Assuming a pushed branch is automatically merged.

### Interview tips

- Explain the four areas: working directory, index, local repository, and remote.
- Compare commands by what they change.
- State that rebase rewrites commit identity.
- Say when a command is safe for shared history.
- Use a small commit graph when explaining merge and rebase.
- Mention testing after conflict resolution.
- For recovery questions, begin with `status`, `log`, and `reflog`.
- Never suggest force or hard reset as the first general solution.

---

## 31. Rapid-Revision Cheat Sheet

| Goal | Command |
|---|---|
| Create repository | `git init` |
| Copy repository | `git clone <url>` |
| Check state | `git status` |
| Stage changes | `git add <path>` |
| Commit | `git commit -m <message>` |
| View history | `git log --oneline --graph` |
| Create branch | `git switch -c <branch>` |
| Change branch | `git switch <branch>` |
| Merge branch | `git merge <branch>` |
| Rebase branch | `git rebase <base>` |
| Download remote updates | `git fetch` |
| Download and integrate | `git pull` |
| Upload commits | `git push` |
| Unstage file | `git restore --staged <file>` |
| Discard unstaged file edits | `git restore <file>` |
| Safely undo shared commit | `git revert <commit>` |
| Temporarily save edits | `git stash` |
| Find lost local commit | `git reflog` |
| Copy selected commit | `git cherry-pick <commit>` |
| Find bug-introducing commit | `git bisect` |

### Final memory points

1. Git stores snapshots and history locally.
2. The index prepares the next commit.
3. A branch is a movable reference; a tag normally stays fixed.
4. Fetch downloads, pull downloads and integrates, and push uploads.
5. Merge joins history; rebase rewrites selected history.
6. Revert is usually best for undoing public history.
7. Reflog can recover many local mistakes.
8. Small commits and short branches make teamwork easier.
9. Never commit secrets.
10. Read `git status` before and after an important operation.

---

Use Git carefully, review changes before committing, and practice recovery commands in a safe repository.
