# CleverFarm Test Assignment

## Run Project

- npm install
- npm run dev

## Used Technologies

- React: main frontend library
- Vite: bundler
- Material UI: styling
- OpenLayers: maps

## Current State

The current solution is using the mock data. The styling is simple, so for simplicity it was done via inline style or
using built in MUI styles.

## Improvements

### State Management

For the future, for not using props drilling, it would be needed to implement state manager system.
There are few options, Mobx, Redux, Zustand.

### Fetching data

The logic with fetching will be placed in api folder. On initial load we will fetch them and store to our state.

### Styling

Provide palette for theming via Material ui styles.

### Localisation

Add localisation for multiple languages.

### Loading

Loading in case of long fetching/rendering. Skeleton can be used also.