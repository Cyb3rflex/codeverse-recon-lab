# CodeVerse Recon Lab 🔎

A beginner-friendly, local-only reconnaissance lab for the CodeVerse Cybersecurity programme.

Students investigate a fictional company, **CyberVerse Technologies**, using basic reconnaissance techniques. The goal is to learn how to discover information, interpret findings, and decide what to investigate next — not to exploit a real system.

## Learning objectives

By the end of the lab, students should be able to:

- Explain reconnaissance in simple terms.
- Distinguish passive and active reconnaissance.
- Identify an attack surface.
- Use Nmap for basic local discovery.
- Identify open ports and services.
- Explore a web application for publicly exposed information.
- Document findings in a short reconnaissance report.
- Explain why an observation matters and propose a safe next step.

## Safety

This lab binds the Express server to `127.0.0.1`, so the target is local to the student's computer by default. It contains only fictional data.

**Do not modify this lab to target third-party systems. Only scan systems you own or have explicit permission to test.**

## Requirements

- Node.js 18+ recommended
- npm
- Nmap
- Git
- A terminal

## Setup

Clone the repository:

```bash
git clone <YOUR-GITHUB-URL>
cd codeverse-recon-lab
```

Install dependencies:

```bash
npm install
```

Start the lab:

```bash
npm start
```

You should see:

```text
CyberVerse Recon Lab running at http://127.0.0.1:3000
Target: 127.0.0.1:3000
```

Open the application in a browser:

```text
http://127.0.0.1:3000
```

Keep that terminal running.

Open a **second terminal** for reconnaissance.

## First scan

Run:

```bash
nmap 127.0.0.1
```

Then scan the lab port directly:

```bash
nmap -p 3000 127.0.0.1
```

Then attempt service detection:

```bash
nmap -sV -p 3000 127.0.0.1
```

## Student mission

You are a junior security analyst. CyberVerse Technologies has authorized you to perform basic reconnaissance against its local development environment.

You have been given only this target:

```text
127.0.0.1
```

Your job is to discover useful information without exploiting the application.

### Find out

1. What port is the application using?
2. What service is running there?
3. What technologies can you identify?
4. What web pages can you discover?
5. What directories or files appear interesting?
6. What information does the application reveal?
7. Which findings would be useful to a security analyst?
8. What would you investigate next?

### Useful tools

You may use tools you have learned in class, including:

```bash
nmap
curl
```

You may also use a normal web browser.

Do not use destructive techniques. Do not attempt authentication bypasses, injection, denial of service, credential attacks, or exploitation.

## Report template

```text
CODEVERSE RECONNAISSANCE REPORT

Team:
Members:

TARGET
127.0.0.1

OPEN PORTS


SERVICES


TECHNOLOGIES


WEB PAGES DISCOVERED


DIRECTORIES / FILES DISCOVERED


INTERESTING INFORMATION


POTENTIAL SECURITY CONCERNS


WHAT WE WOULD INVESTIGATE NEXT

```

## Instructor note

The answer key is intentionally not part of the student instructions. Keep `instructor/ANSWER-KEY.md` private when publishing the student repository.
