dev:
	docker compose down -v
	docker compose build --no-cache api
	docker compose up -d mongo mongo-express
	docker compose up api
