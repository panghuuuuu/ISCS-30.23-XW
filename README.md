# 🏡️ Orsem Official Website

Orsem is the Ateneo De Manila University orientation seminar for incoming freshmen students. Here, students will learn about the different buildings, facilities and culture of Ateneo and its students.

## 🔧️ Installation Guide

1. Ensure that you have [Git](https://git-scm.com/) installed.

2. Go to the folder where you wish to install the repository, then open your terminal to that directory.

3. Type the following commands to clone the repository to your local machine:

    ```bash
    git clone https://gitlab.com/misa.eservices/orsem2020.git
    ```

## 📂 File Structure
`orsem-django` - Main backend component of the application, made with Django

`orsem-react` - Main frontend component of the application, made with Create React App

*NOTE: Refer to the `README.md` in each folder to find their respective documentation*

## 🌳 Branch Structure
`main` - **PRODUCTION** branch of the application. Reflects what is visible to the public. Should only accept merges from `staging`.

`staging` - Mirror of the production environment for testing. For internal use only. Should only accept merges from dev branches.

`[name]-[feature]-dev` - Additional features should be split into its own branch (ex. `echo-update-frontend-dev`).

## 🧑‍💻 Working Guidelines
* **Rebase before merging**. For instance, merging a dev branch into `staging`, ensure first to rebase on `staging`. This is to minimize any merge conflicts.
* **Delete merged branches**. Stale branches (i.e. branches that have already been merged) are considered unnecessary and should be pruned.