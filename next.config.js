const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

module.exports = withNextIntl({
  // Diğer Next.js yapılandırmaları buraya eklenebilir
});