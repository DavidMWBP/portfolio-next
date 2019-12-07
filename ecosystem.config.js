module.exports = {
	apps: [
		{
			name: 'Portfolio',
			script: './server/index.js',

			// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
			exec_mode: 'cluster',
			instances: 2,
			autorestart: true,
			watch: './server/*',
			ignore_watch: ['node_modules'],
			max_memory_restart: '300M',
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
};
