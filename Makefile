.DEFAULT_GOAL := check

init:
	@echo "🏁 Initialising ..."
	npm install

lint:
	@echo "👁️ Linting..."
	npm run lint

format:
	@echo "🦋 Formating..."
	npm run format

test:
	@echo "🧪 Testing..."
	npm test

precommit:
	@echo "🐺 Checking commit..."
	npm run precommit

new:
	@echo "📜 Generating template..."
	npm run new:f

clean:
	@echo "🧽 Cleaning... "
	@rm -Rf node_modules dist coverage package-lock.json
