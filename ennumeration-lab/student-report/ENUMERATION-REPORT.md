# Northstar Logistics Technologies

## Enumeration Investigation Report

**CodeVerse Cybersecurity — Mission 002**

---

### Investigator

**Name:**

**Team:**

**Date:**

---

# 1. Investigation Brief

You have been authorized to investigate a local development web application belonging to **Northstar Logistics Technologies**, a fictional logistics technology company operating across West Africa.

Your objective is to understand what the application exposes and build an accurate picture of its attack surface.

This is an **enumeration exercise**.

You are not being asked to exploit the application.

### Authorized Target

```text
127.0.0.1:3000
```

---

# 2. Investigation Objective

Your team needs to answer:

* What service is running?
* What technology is being used?
* What pages are available?
* What directories or files can be discovered?
* Does the application expose an API?
* What API endpoints exist?
* What useful information can be learned?
* What should a security analyst investigate next?

Remember:

> **Every discovery should create another question.**

---

# 3. Initial Reconnaissance

Before going deeper, record what you already know about the target.

### Target

```text
127.0.0.1:3000
```

### What did you initially observe?

Write your first observations here.

---

### First Question

What was the first question your team wanted to answer?

>

### How did you investigate it?

>

---

# 4. Port & Service Enumeration

Investigate the target's exposed ports and services.

| Port | Protocol | State | Service | Version / Technology |
| ---- | -------- | ----- | ------- | -------------------- |
|      |          |       |         |                      |
|      |          |       |         |                      |
|      |          |       |         |                      |

### What does your discovery tell you?

>

### What question does this create?

>

---

# 5. Application Fingerprinting

Now investigate the web application itself.

Record any useful information you discover about:

* Web server
* Framework
* Runtime
* Application name
* Environment
* Version information
* HTTP response headers

| Information | What did you discover? | How did you discover it? |
| ----------- | ---------------------- | ------------------------ |
|             |                        |                          |
|             |                        |                          |
|             |                        |                          |
|             |                        |                          |

### What is the most interesting piece of information you found?

>

### Why might it matter to a security analyst?

>

---

# 6. Website Enumeration

Explore the public-facing application.

Record the pages you discover.

| Page / Path | How did you discover it? | What did you learn? |
| ----------- | ------------------------ | ------------------- |
|             |                          |                     |
|             |                          |                     |
|             |                          |                     |
|             |                          |                     |

### What does the website tell you about Northstar?

>

---

# 7. `robots.txt` Investigation

Investigate whether the application exposes a `robots.txt` file.

### Did you find one?

**Yes / No**

### What paths or information did it reveal?

```text
```

### Follow-up Question

Does `robots.txt` prevent someone from accessing a resource?

Explain:

>

---

# 8. Directory & File Enumeration

Investigate interesting paths discovered during your enumeration.

Do not assume that a directory is important simply because its name looks interesting.

Investigate it and record the evidence.

| Path | How did you discover it? | What did you find? |
| ---- | ------------------------ | ------------------ |
|      |                          |                    |
|      |                          |                    |
|      |                          |                    |
|      |                          |                    |

---

## Interesting Discovery

Which directory or file was the most interesting?

**Path:**

```text
```

**What did you find?**

>

**Why is it interesting?**

>

**What would you investigate next?**

>

---

# 9. API Enumeration

Now investigate whether Northstar exposes an API.

### API discovered?

**Yes / No**

### API Prefix

```text
```

### What made you suspect that an API exists?

>

---

## API Endpoints

Document every endpoint you discover.

| Endpoint | Method | What does it return? | How was it discovered? |
| -------- | ------ | -------------------- | ---------------------- |
|          |        |                      |                        |
|          |        |                      |                        |
|          |        |                      |                        |
|          |        |                      |                        |

---

# 10. Interesting API Information

Choose the API endpoint you found most interesting.

### Endpoint

```text
```

### What information does it expose?

>

### Why could this information be useful during a security assessment?

>

### What question does this create?

>

---

# 11. Evidence Log

Good security investigations need evidence.

Record your most important discoveries.

| # | Discovery | Evidence | Why it matters |
| - | --------- | -------- | -------------- |
| 1 |           |          |                |
| 2 |           |          |                |
| 3 |           |          |                |
| 4 |           |          |                |
| 5 |           |          |                |

---

# 12. Investigation Chain

Choose **three discoveries** and show how one discovery led to another.

### Example

```text
Open Port
    ↓
HTTP Service
    ↓
Web Application
    ↓
API
    ↓
New Question
```

Now create your own investigation chain:

```text

    ↓

    ↓

    ↓

    ↓

    ↓
```

---

# 13. Important Findings

List the three most important things your team discovered.

## Finding 1

**Discovery:**

>

**Evidence:**

>

**Why it matters:**

>

---

## Finding 2

**Discovery:**

>

**Evidence:**

>

**Why it matters:**

>

---

## Finding 3

**Discovery:**

>

**Evidence:**

>

**Why it matters:**

>

---

# 14. What We Do NOT Know Yet

Enumeration should also reveal what you **don't** know.

What questions remain unanswered?

1.

2.

3.

4.

---

# 15. What Would You Investigate Next?

Imagine this was a real company application and your enumeration phase had just finished.

What would you investigate next?

Consider:

* Security configuration
* Authentication
* Authorization
* API access controls
* Information disclosure
* Software versions
* Input handling
* Exposed development resources

### Your Investigation Plan

>

---

# 16. Final Investigation Summary

Write a short summary of your investigation.

Your summary should explain:

* What you discovered
* How you discovered it
* The most interesting finding
* Why that finding matters
* What you would investigate next

### Summary

>

---

# Investigation Method

Complete this before submitting your report.

### The most useful tool we used was:

>

### It helped us answer:

>

### The most difficult discovery was:

>

### We solved it by:

>

### One thing we learned about enumeration:

>

---

# Investigator Statement

I confirm that this investigation was performed only against the authorized local CodeVerse cybersecurity training environment.

**Investigator:**

**Date:**

**Team:**

---

## CodeVerse Cybersecurity

### Discover → Enumerate → Assess → Investigate → Respond
