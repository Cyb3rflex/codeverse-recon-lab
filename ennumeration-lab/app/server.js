const express = require("express");
const path = require("path");
const company = require("./data/company.json");

const app = express();

const PORT = 3000;
const HOST = "127.0.0.1";

app.use(express.json());

/*
 * =========================================================
 * Security Training Headers
 * =========================================================
 *
 * These headers intentionally reveal information.
 * Students should discover them during enumeration.
 */

app.use((req, res, next) => {
  res.setHeader("X-Lab-Environment", "Northstar-Development");
  res.setHeader(
    "X-Training-Notice",
    "Authorized CodeVerse cybersecurity training environment"
  );

  next();
});

/*
 * =========================================================
 * Public Website
 * =========================================================
 */

app.use(express.static(path.join(__dirname, "public")));

/*
 * =========================================================
 * Robots.txt
 * =========================================================
 */

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");

  res.send(
`User-agent: *
Disallow: /internal/
Disallow: /backup/
Disallow: /api/
Disallow: /dev/
`
  );
});

/*
 * =========================================================
 * Internal Development Area
 * =========================================================
 *
 * This is intentionally discoverable.
 * It does not contain real secrets.
 */

app.get("/internal/", (req, res) => {
  res.type("text/plain");

  res.send(
`Northstar Logistics Technologies
Internal Development Area

Environment: Development

Current sprint:
- Improve FleetTrack dashboard
- Review DispatchHub API responses
- Prepare staging deployment

Internal services:
- FleetTrack
- DispatchHub
- Northstar API

Note:
This environment is part of the CodeVerse cybersecurity training lab.
`
  );
});

/*
 * =========================================================
 * Development Information
 * =========================================================
 */

app.get("/dev/", (req, res) => {
  res.type("text/plain");

  res.send(
`Northstar Development Environment

Application:
Northstar Customer Operations Portal

Runtime:
Node.js

Framework:
Express

API Prefix:
/api

Application Port:
3000

Environment:
development

Next deployment:
staging

Developer note:
The API routes should be reviewed before the next staging deployment.
`
  );
});

/*
 * =========================================================
 * Backup Directory
 * =========================================================
 */

app.get("/backup/", (req, res) => {
  res.type("text/plain");

  res.send(
`Northstar Development Backup Directory

Available development artifacts:

company.json
service-notes.txt
deployment-notes.txt

These files are fictional training data.
`
  );
});

/*
 * =========================================================
 * Backup Files
 * =========================================================
 */

app.get("/backup/service-notes.txt", (req, res) => {
  res.type("text/plain");

  res.send(
`Northstar Service Notes

Application:
Northstar Customer Operations Portal

Web Framework:
Express

Application Port:
3000

API Prefix:
/api

Known API resources:
- company
- status
- team

Next investigation:
Review the API resources exposed by the development application.
`
  );
});

app.get("/backup/deployment-notes.txt", (req, res) => {
  res.type("text/plain");

  res.send(
`Northstar Deployment Notes

Environment:
development

Planned deployment:
staging

Before deployment:
1. Review API routes
2. Remove development-only endpoints
3. Review HTTP response headers
4. Confirm backup files are not publicly accessible
5. Run application security checks

Status:
Pending
`
  );
});

/*
 * =========================================================
 * API
 * =========================================================
 */

app.get("/api/company", (req, res) => {
  res.json({
    name: company.company.name,
    industry: company.company.industry,
    headquarters: company.company.headquarters,
    description: company.description,
    locations: company.locations
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "operational",
    environment: "development",
    service: "Northstar Customer Operations Portal",
    version: "0.8.4-dev",
    uptime: "training-instance",
    region: "west-africa"
  });
});

app.get("/api/team", (req, res) => {
  res.json({
    department: "Engineering",
    team: [
      {
        role: "Engineering Lead",
        name: "Tunde Adebayo"
      },
      {
        role: "Backend Engineer",
        name: "Mariam Okafor"
      },
      {
        role: "Frontend Engineer",
        name: "Daniel Mensah"
      },
      {
        role: "Product Engineer",
        name: "Sarah Ibrahim"
      }
    ]
  });
});

/*
 * =========================================================
 * API Documentation Clue
 * =========================================================
 */

app.get("/api", (req, res) => {
  res.json({
    service: "Northstar API",
    version: "0.8.4-dev",
    environment: "development",
    availableResources: [
      "/api/company",
      "/api/status",
      "/api/team"
    ]
  });
});

/*
 * =========================================================
 * 404 Handler
 * =========================================================
 */

app.use((req, res) => {
  res.status(404).send(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>404 - Northstar</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f5f7fa;
            padding: 60px;
            color: #1f2937;
          }

          .box {
            max-width: 650px;
            margin: auto;
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          }

          h1 {
            margin-top: 0;
          }

          code {
            background: #eef2f7;
            padding: 4px 7px;
            border-radius: 5px;
          }
        </style>
      </head>

      <body>
        <div class="box">
          <h1>404</h1>
          <p>The requested resource could not be found.</p>
          <p>Northstar Customer Operations Portal</p>
        </div>
      </body>
    </html>
    `
  );
});

/*
 * =========================================================
 * Start Server
 * =========================================================
 */

app.listen(PORT, HOST, () => {
  console.log("");
  console.log("==============================================");
  console.log(" Northstar Logistics Technologies");
  console.log(" Customer Operations Portal");
  console.log("==============================================");
  console.log(` Environment: development`);
  console.log(` URL: http://${HOST}:${PORT}`);
  console.log(` API: http://${HOST}:${PORT}/api`);
  console.log("==============================================");
  console.log("");
});