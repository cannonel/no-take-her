const fs = require('fs');
const path = require('path');
const express = require('express');
const { nanoid } = require('nanoid');

const app = express();
const PORT = process.env.PORT || 3005