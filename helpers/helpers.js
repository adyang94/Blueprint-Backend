export function authenticateToken (req, res) {
    const token = req.headers['authorization'];
    
    if (!token || token !== 'BLUEPRINT_HEALTH_IS_AWESOME!!') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
};

// export {authenticateToken};