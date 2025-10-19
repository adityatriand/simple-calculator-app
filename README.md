# Simple Calculator App

A basic web calculator built with TypeScript that performs addition and subtraction operations. Includes calculation history stored in browser's local storage.

## Features

- Basic arithmetic operations (addition and subtraction)
- Number input with digit buttons
- Positive/negative number toggle
- Calculation history (stores last 5 calculations)
- Local storage persistence
- Clear calculator function

## Tech Stack

- TypeScript
- Webpack (bundler)
- Vanilla JavaScript
- HTML/CSS
- LocalStorage API

## Project Structure

```
simple-calculator-app/
├── src/
│   ├── calculator.ts    # Main calculator logic
│   ├── storage.ts       # LocalStorage operations
│   ├── helper.ts        # Utility functions
│   └── types.ts         # TypeScript interfaces
├── assets/
│   └── style.css        # Styles
├── dist/
│   └── bundle.js        # Compiled output
├── index.html           # Main HTML file
├── tsconfig.json        # TypeScript config
├── webpack.config.js    # Webpack config
└── package.json         # Dependencies
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development

Build the project:
```bash
npm run build
```

Watch mode for development:
```bash
npm run watch
```

## Usage

After building, simply open `index.html` in your browser. The calculator works without needing a local server thanks to Webpack bundling.

## How It Works

The calculator maintains state with four properties:
- displayNumber: Current number shown
- operator: Selected operation (+/-)
- firstNumber: First operand
- waitingForSecondNumber: Operation state flag

Calculations are automatically saved to localStorage and displayed in the history table. Only the 5 most recent calculations are kept.

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript
- LocalStorage API
- DOM manipulation
