# Contributing guides

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to my project. These are mostly guidelines, not rules. Use your
best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

[How Can I Contribute?](#how-can-i-contribute)

* [Reporting Bugs](#reporting-bugs)
* [Suggesting Enhancements](#suggesting-enhancements)
* [Your First Code Contribution](#your-first-code-contribution)
* [Pull Requests](#pull-requests)

[Style guides](#style-guides)

* [Git commit message](#git-commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By
participating, you are expected to uphold this code. Please report unacceptable behavior
to [github@igorilic.net](mailto:github@igorilic.net).

## I don't want to read this whole thing I just have a question!!!

> **Note:** Please don't file an issue to ask a question. If you have any question, reach out to me on Twitter or via Email.

## What should I know before I get started?

In order to be able to build the app you will need to rename the secrets_sample.txt file into secrets.xml.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community
understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check opened and/or closed issues as you might find out that you don't need to
create one. When you are creating a bug report, please include as many details as possible.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined to what your
bug is related to, create an issue on that repository and provide all the necessary information.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable
  snippets, which you use in those examples. If you're providing snippets in the issue,
  use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that
  behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the
  problem. If you use the keyboard while following the steps, **record the GIF with
  the [Keybinding Resolver](https://github.com/atom/keybinding-resolver) shown**. You can
  use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows,
  and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and
  share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version?** What's the most
  recent version in which the problem doesn't happen?
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which
  conditions it normally happens.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestions, including completely new features and minor
improvements to existing functionality. Following these guidelines helps maintainers and the community understand your
suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you
might find out that you don't need to create one. When you are creating an enhancement suggestion,
please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Include the steps that you
imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check if there's already an open issue with the enhancement label opened or closed.**

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and
provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those
  examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of the app which
  the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and
  Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on
  Linux.
* **Explain why this enhancement would be useful** to most users.
* **Specify which version of app you're using.**
* **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

* Beginner issues - issues which should only require a few lines of code, and a test or two.
* Help wanted issues - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for
impact a given change will have.

### Pull Requests

The process described here has several goals:

- Maintain code quality and readability
- Fix problems that are important to users
- Engage the community in working toward the best possible app
- Enable a sustainable system for maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow the [style guides](#style-guides)

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you
to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Style guides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on macOS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

# Note

This contributing guide has been adapted from the [Atom](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
repository for this project.