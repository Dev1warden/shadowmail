const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const mailboxRoutes = require('./routes/mailbox');
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/mailboxes', mailboxRoutes);
app.listen(3000, () => console.log('API server running on port 3000'));
