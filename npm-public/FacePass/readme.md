# FacePass

Version: 0.0.3 Developer Beta

## Introduction

FacePass is a cutting-edge facial recognition library designed to provide secure authentication using facial biometrics. This is version 0.0.3, currently in the Developer Beta stage.

## Installation

To install FacePass, ensure that Node.js is installed on your system. Then, you can install FacePass and its dependencies using npm:

```bash
npm install facepass
```

## Features in 0.0.3 Developer Beta

- **Sign-in button**: A new feature that allows users to sign in with a single click.
- **Scope identifiers**: Enhanced security measures to ensure data privacy.
- **Force sign-in**: An additional layer of security that requires users to sign in under certain conditions.

## Usage

### Requesting Data

You can request specific data as per your requirements:

```script
const requests = ["fullname","email","age"];
```

You can request the following data: `fullname`, `email`, `age`, `dateofbirth`, `phone`, and `gender`.

### Using the FacePass Component

Here’s an example of how to use the FacePass component:

```script
export default function App() {
  const request = ["fullname","email","dateofbirth","phone"];

  return (
    <main className="VStack min-h-screen items-center ">
     <FacePass scopes={request}/>
    </main>
  );
}
```

## Dependencies

FacePass is linked with the following libraries:

- `NextUI` (Tested on version 2.3.6)
- `ReactIcon` (Tested on version 5.1.0)
- `Axios` (Tested on version 1.6.8)

Please note that this is a Developer Beta version, and some features may not be fully functional or may change in future releases. We appreciate your understanding and support.
