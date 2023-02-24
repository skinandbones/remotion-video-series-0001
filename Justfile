build:
  docker build -t remotion-repro-1 .

run_docker:
  docker run \
    -e CONCURRENCY={{env_var_or_default('CONCURRENCY', '1') }} \
    -e COMPOSITION={{env_var_or_default('COMPOSITION', 'VideoSeries') }} \
    remotion-repro-1

run_videoseries:
  @COMPOSITION=VideoSeries just run_docker