# ohanadaily
Market place to sell videos, pictures, footages, etc. to news media.
# ohanadaily
Market place to sell videos, pictures, footages, etc. to news media.

### 

### Schemas

## Users
|Property|Type|Options|
|---|---|---|
|id(Pk)|number|serial, not null, unique|
|first_name|string(255)|not null|
|last_name|string(255)|not null|
|email|email|not null|
|birthday|date|not null|
|address|string|not null|
|user_type|boolean|not null|
|rank|integer|not null
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

## Content
|Property|Type|Options|
|---|---|---|
|id(Pk)|number|serial, not null, unique|
|type|video/image|not null|
|user_id(Fk)|number|not null|
|title|string|not null|
|description|string|not null|
|location|string|not null|
|bid|currency|not null|
|status|boolean|not null|
|category|string|not null|
|file_size|intger|not null|
|resolution|string|not null|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

## Transactions 
|Property|Type|Options|
|---|---|---|
|id(Pk)|number|serial, not null, unique|
|buyer_id(Fk)|integer|not null|
|seller_id(Fk)|integer|not null|
|content_id|intger|not null|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

## Preferred 
|Property|Type|Options|
|---|---|---|
|id(Pk)|number|serial, not null, unique|
|buyer_id|integer|not null|
|seller_id|integer|not null|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|
