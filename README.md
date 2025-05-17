## Tools Used

- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React
- **Security:** JWT for authentication
- **Real-time Communication:** socket.io
- **AI Engine:** Gemini LLM
- **Validation:** Zod for schema validation

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- MongoDB
- Python 3.8+
- `pip` for installing Python dependencies

### Installation

1. Clone the repository:
   ```bash
   git clone -b localhost https://github.com/ozearkhan/Healthify.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd ./backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ./swasthyaSampark
   npm install
   ```
4. Install Python dependencies for the `./6ml/6ml` server:

   ```bash
   cd ./6ml/6ml
   pip install -r requirements.txt

   ```

### Environment Configuration

Create a `.env` file in the `backend` directory with the following template. Replace the placeholders with your generated keys and URLs:

```env
# Environment Configuration for Healthify Backend

# Application Environment
NODE_ENV=development

# Server Configuration
PORT=3001

# Database Configuration
MONGODB_URI=<your_mongodb_connection_string>

# JWT Secret for Authentication
JWT_SECRET=<your_jwt_secret_key>

# AI Engine Configuration
GEMINI_API_KEY=<your_gemini_api_key>
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest
MODEL_NAME=gemini-1.5-pro

# Email Configuration
EMAIL=<your_email@example.com>
PASS=<your_email_password>
```

### Generating Required Keys and API URLs

1. **MongoDB URI**:

   - Create a MongoDB Atlas account and generate a connection string for your database.

2. **JWT Secret**:

   - Generate a secure secret string for JSON Web Token (JWT) authentication.

3. **Gemini API Key**:

   - Sign up for access to the Google Generative Language API and obtain your API key.

4. **Email and Password**:
   - Use a secure email service for transactional emails. If using Gmail, consider setting up an App Password if 2FA is enabled.

### Running the Application

1. Start the backend server:
   ```bash
   cd ./backend
   npm start
   ```
2. Start the frontend application:
   ```bash
   cd ./swasthyaSampark
   npm run dev
   ```
3. Start the ML server
   ```bash
   cd ./6ml/6ml
   python server.py
   ```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.

## Contact

For any inquiries or issues, feel free to reach out to the project maintainers via [ozearkhan1224@gmail.com](mailto:ozearkhan1224@gmail.com).

---
