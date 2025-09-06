# Paybis Crypto Currency Exchange
A modern cryptocurrency exchange application built with Vue.js that allows users to track real-time cryptocurrency prices and perform virtual exchanges.
## Features
- **Real-Time Cryptocurrency Data**: Fetches and displays up-to-date pricing for Bitcoin, Ethereum, Tether, and Solana in USD
- **Auto-Refresh Timer**: Automatically refreshes cryptocurrency rates every minute to ensure data accuracy
- **Exchange Simulation**: Allows users to simulate cryptocurrency exchanges
- **Price History**: Tracks and displays cryptocurrency price history over time
- **Exchange History**: Records user exchange transactions for future reference
- **Interactive Charts**: Visualizes cryptocurrency price trends using ECharts
- **Responsive Design**: Mobile-friendly interface built with Bootstrap 5

## Technology Stack
- **Frontend Framework**: Vue.js 3.5.18
- **State Management**: Pinia 3.0.3
- **UI Components**: Bootstrap 5.3.8, Bootstrap-Vue-Next 0.40.0
- **Data Visualization**: ECharts 5.6.0, Vue-ECharts 7.0.3
- **Build Tools**: Vite 7.0.6
- **Code Quality**: ESLint 9.31.0, Prettier 3.6.2

## Project Setup
``` sh
npm install
```
### Compile and Hot-Reload for Development
``` sh
npm run dev
```
### Compile and Minify for Production
``` sh
npm run build
```
### Lint with ESLint
``` sh
npm run lint
```
## Project Structure
- **/src/ui-kit**: Reusable UI components
- **/src/components**: Vue components for the UI
- **/src/stores**: Pinia stores for state management
- **/src/utils**: Utility functions for formatting and error handling

## API Integration
The application integrates with the CoinGecko API to fetch real-time cryptocurrency data:
- Endpoint: `https://api.coingecko.com/api/v3/simple/price`
- Supported cryptocurrencies: Bitcoin, Ethereum, Tether, and Solana
- Price displayed in USD

## License
This project is available for open-source use and modification.
