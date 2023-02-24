image_name := "remotion-repro-1"
ecr_registry := ""

login:
  aws ecr get-login-password --region us-east-1 | \
   docker login --username AWS --password-stdin {{ ecr_registry }}

build:
  docker build --platform linux/amd64 -t {{ image_name }} .

tag: login
  docker tag {{ image_name }}:latest {{ ecr_registry }}/{{ image_name }}:latest

push: build tag
  docker push {{ ecr_registry}}/{{ image_name }}:latest

build_local:
  docker build -t {{ image_name }}:arm64 .

run_local: build_local
  docker run \
    -e CONCURRENCY={{env_var_or_default('CONCURRENCY', '1') }} \
    -e COMPOSITION={{env_var_or_default('COMPOSITION', 'VideoSeries') }} \
    {{ image_name }}:arm64

run_videoseries:
  @COMPOSITION=VideoSeries just run_local