echo 'Build...'
yarn build
echo 'Build complete!'
echo 'Init sync...'
aws s3 sync ./dist s3://search.cafesao.net --profile pessoal --region sa-east-1
echo 'Sync end!'
