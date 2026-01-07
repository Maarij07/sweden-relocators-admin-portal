'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

// List of all available components
const COMPONENTS = [
  { name: 'Animate', description: 'Animation utilities and components', category: 'Motion' },
  { name: 'Carousel', description: 'Carousel slider component', category: 'Display' },
  { name: 'Chart', description: 'Chart components and utilities', category: 'Visualization' },
  { name: 'Country Select', description: 'Country selection component', category: 'Input' },
  { name: 'Custom Breadcrumbs', description: 'Breadcrumb navigation', category: 'Navigation' },
  { name: 'Custom Data Grid', description: 'Advanced data table grid', category: 'Data' },
  { name: 'Custom Date Range Picker', description: 'Date range picker component', category: 'Input' },
  { name: 'Custom Dialog', description: 'Modal dialog component', category: 'Overlay' },
  { name: 'Custom Popover', description: 'Popover component', category: 'Overlay' },
  { name: 'Custom Tabs', description: 'Tab navigation component', category: 'Navigation' },
  { name: 'Editor', description: 'Rich text editor component', category: 'Input' },
  { name: 'Empty Content', description: 'Empty state display component', category: 'Display' },
  { name: 'File Thumbnail', description: 'File thumbnail preview', category: 'File' },
  { name: 'Filters Result', description: 'Filter results display', category: 'Data' },
  { name: 'Flag Icon', description: 'Country flag icons', category: 'Icon' },
  { name: 'Hook Form', description: 'React Hook Form utilities', category: 'Form' },
  { name: 'Iconify', description: 'Icon library integration', category: 'Icon' },
  { name: 'Image', description: 'Image component utilities', category: 'Media' },
  { name: 'Label', description: 'Label badge component', category: 'Display' },
  { name: 'Lightbox', description: 'Image lightbox/modal', category: 'Media' },
  { name: 'Loading Screen', description: 'Loading splash screen', category: 'Feedback' },
  { name: 'Logo', description: 'Logo component', category: 'Branding' },
  { name: 'Map', description: 'Map display component', category: 'Visualization' },
  { name: 'Markdown', description: 'Markdown renderer', category: 'Display' },
  { name: 'Mega Menu', description: 'Mega menu navigation', category: 'Navigation' },
  { name: 'Nav Basic', description: 'Basic navigation component', category: 'Navigation' },
  { name: 'Nav Section', description: 'Navigation section component', category: 'Navigation' },
  { name: 'Number Input', description: 'Number input field', category: 'Input' },
  { name: 'Organizational Chart', description: 'Org chart visualization', category: 'Visualization' },
  { name: 'Phone Input', description: 'Phone number input', category: 'Input' },
  { name: 'Progress Bar', description: 'Progress indicator', category: 'Feedback' },
  { name: 'Scrollbar', description: 'Custom scrollbar component', category: 'Utility' },
  { name: 'Search Not Found', description: 'Search not found display', category: 'Display' },
  { name: 'Settings', description: 'Settings drawer/panel', category: 'Configuration' },
  { name: 'Snackbar', description: 'Toast/snackbar notifications', category: 'Feedback' },
  { name: 'SVG Color', description: 'SVG color utilities', category: 'Utility' },
  { name: 'Table', description: 'Table component', category: 'Data' },
  { name: 'Upload', description: 'File upload component', category: 'File' },
];

const CATEGORIES = [...new Set(COMPONENTS.map(c => c.category))].sort();

export function ComponentsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Available Components
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Browse all available components in the project. Each component is located in src/components/{'{componentName}'}
        </Typography>
      </Box>

      {CATEGORIES.map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
            {category}
          </Typography>
          <Grid container spacing={2}>
            {COMPONENTS.filter(c => c.category === category).map((component) => (
              <Grid item xs={12} sm={6} md={4} key={component.name}>
                <Card
                  sx={{
                    p: 2.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: 4,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <Chip label={category} size="small" variant="outlined" />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {component.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {component.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: 'monospace',
                      p: 1,
                      backgroundColor: '#f5f5f5',
                      borderRadius: 1,
                      color: '#333',
                    }}
                  >
                    src/components/{component.name.toLowerCase().replace(/ /g, '-')}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <Box sx={{ mt: 4, p: 2, bgcolor: 'info.lighter', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ color: 'info.darker' }}>
          💡 Tip: Import components from src/components/{'{componentName}'} and use them in your pages.
        </Typography>
      </Box>
    </DashboardContent>
  );
}
