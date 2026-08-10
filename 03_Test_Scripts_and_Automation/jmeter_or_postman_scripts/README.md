# JMeter/Postman Scripts

## Postman
- Import file sample_postman_collection.json
- Set baseUrl sesuai environment lokal
- Jalankan Collection Runner untuk baseline response time

## JMeter (opsional)
- Buat thread group 100-500 virtual users
- Endpoint rekomendasi:
  - GET /up
  - GET /login
  - GET /dashboard (tanpa auth, expected redirect)
- Metrik yang diambil:
  - Average response time
  - Throughput
  - Error rate

## Bukti untuk laporan
- Screenshot summary/report run
- Rekap metrik ke Master_Test_Plan_and_Report.md
