# Playwright UI Test Assessment

This project is an easy-to-use UI automation suite built with Playwright and JavaScript for UI automation assessment. It validates key user flows on the profile form, with a small but well-structured test set covering both smoke and regression scenarios.

## Purpose

- Automate core profile form validation scenarios
- Provide a simple, maintainable Playwright project structure
- Multiple browser testing support
- Generate test execution reports with Playwright HTML and Allure
- CICD support with github actions

## Stack Used

- JavaScript (ES Modules)
- [Playwright](https://playwright.dev/)
- Node.js
- `dotenv` for environment configuration
- `allure-playwright` for Allure reporting

## Setup With nvm

This project uses Node.js `20`.

```bash
nvm install
nvm use
node -v
```

## Install

```bash
npm install
npx playwright install
```

## Run Tests Locally

Run all tests:

```bash
npm test
```

Run by browser:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

Run by suite:

```bash
npm run test:smoke
npm run test:regression
```

Run in headed mode:

```bash
npm run test:headed
```

## View Playwright Report

After a test run:

```bash
npm run report:playwright
```

This opens the HTML report from the `playwright-report/` folder.

## Generate and View Allure Report

After a test run, Allure results are already written to `allure-results/`.

View the report with:

```bash
npm run report:allure
```

This serves the Allure report from the generated test results.

## Project Structure

```text
.
├── src/
│   ├── data/         # Test data used across scenarios
│   ├── pages/        # Page Object Model classes
│   ├── selectors/    # Centralized page selectors
│   └── utils/        # Environment/config helpers
├── tests/
│   ├── smoke/        # Critical happy-path tests
│   └── regression/   # Negative and validation coverage
├── playwright.config.js
├── allure-results/   # Raw Allure results
├── playwright-report/ # Playwright HTML report
└── test-results/     # Screenshots, videos, traces, and run output
```

## Notes and Challenges

- The goal was to containerize the project with Docker, but this was not completed due to time constraints.
- Only 5 test cases were automated in this submission due to the same time constraint.
