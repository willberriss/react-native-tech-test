Drinks app
Language: TypeScript

1. Start Metro bundler
2. Start the mobile application
3. Run the prettier
4. Run the eslint
5. Run the TypeScript compiler
6. Run the unittests using jest

# 1. Start Metro bundler

```bash
npx react-native start
```

# 2. Start the mobile application

```bash
npx react-native run-android
```

# 3. Run prettier

```bash
npx prettier --check src
```

```bash
npx prettier --write src
```

# 4. Run eslint

```bash
npx eslint --ext .tsx src
```

or to run the script alias "lint" in package.json

```bash
npm run lint
```

# 5. Run the TypeScript compiler

```bash
yarn tsc 
```

or

```bash
npx tsc 
```

# 6. Run the unittests

To run the tests in all the subdirectories

```bash
npx jest
```

or to run the script alias "test" in package.json

```bash
npm run test
```

To run only the tests in the subdirectory src

```bash
npx jest src
```


# Notes:

## Line added t bottom og ./android/app/build.gradle to make ionicons appear

```bash
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

