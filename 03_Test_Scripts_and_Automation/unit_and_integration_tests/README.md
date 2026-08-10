# Unit and Integration Tests

Test otomatis utama ada pada folder project berikut:
- tests/Unit/RoleModelTest.php
- tests/Unit/UserHasRoleTest.php
- tests/Feature/Auth/LoginFlowTest.php
- tests/Feature/AuthorizationAndIntegrationTest.php

## Perintah Eksekusi
- php artisan test --testsuite=Unit
- php artisan test --testsuite=Feature
- php artisan test

## Catatan
- Gunakan environment testing default (SQLite in-memory) sesuai phpunit.xml.
