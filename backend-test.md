## Fullstack Test Project

This test is divided into *FIVE* mandatory challenge and 4 optional challenges.

Since our stacks are mostly composed of NodeJS (Javascript & MongoDB), we require you to work on this project with **NodeJS and MongoDB**.

In order to submit the project, you MUST complete all mandatory challenges.
For every optional challenge completed, you will earn bonus score that will be summed into your final score.

We will select candidates who gets the highest score
_(You do not need to complete all)_

### Submission
Submission can be done in TWO ways:

1. Send zipped project files to sg-tech@eatirvins.com
2. **EXTRA 50 POINT**: Upload it to Github/Bitbucket and email repository link to fazri.alfan@eatirvins.com and zack.lim@eatirvins.com

---

## Challenge 1 (MANDATORY)
**Create this endpoint: [POST] `/api/products`**
Validate and save a Product into database if successful. Product should have these properties:
```
- id
- createdAt (mandatory)
- updatedAt (mandatory)
- name (mandatory)
- price (mandatory)
- description (optional)
- image (optional)
- tags (optional)
```

If successful, this endpoint must return a JSON response and `201` status code.
```
[
  {
    "data": {
      "id": "10a08dbf-6901-4c9f-a856-9ac0084f4765",
      "createdAt": 2021-03-30T08:00:30.859+00:00,
      "updatedAt": 2021-03-30T08:00:30.859+00:00,
      "name": "Product 1",
      "price": 100.00,
      "image": "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
      "tags": ["tag1", "tag2"]
    }
  }
]
```

## Challenge 2 (MANDATORY)
**Create this endpoint: [GET] `/api/products/10a08dbf-6901-4c9f-a856-9ac0084f4765`**
Get product detail by ID from database
If successful, this endpoint must return a JSON response of updated product and `200` status code.
```
{
  "data": {
    "id": "10a08dbf-6901-4c9f-a856-9ac0084f4765",
    "createdAt": 2021-03-30T08:00:30.859+00:00,
    "updatedAt": 2021-03-30T08:00:30.859+00:00,  
    "name": "Product 1",
    "price": 100.00,
    "image": "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
    "tags": ["tag1", "tag2"]
  }
}
```

## Challenge 3 (MANDATORY)
**Create this endpoint: [POST] `/api/products/10a08dbf-6901-4c9f-a856-9ac0084f4765`**
Validate and update a Product.
If successful, this endpoint must return a JSON response of updated product id and `200` status code.
```
{
  "data": {
    "id": "10a08dbf-6901-4c9f-a856-9ac0084f4765",
    "createdAt": 2021-03-30T08:00:30.859+00:00,
    "updatedAt": 2021-04-05T05:11:31.274+00:00,
    "name": "Product 1 update",
    "price": 120.00,
    "image": "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
    "tags": ["tag3"]
  }
}
```

## Challenge 4 (MANDATORY)
**Create this endpoint: [DELETE] `/api/product/10a08dbf-6901-4c9f-a856-9ac0084f4765`**
Delete a Product.
If successful, this endpoint must return a JSON response of deleted product id and `200` status code.
```
{
  "data": [
  	"id": "10a08dbf-6901-4c9f-a856-9ac0084f4765",
  ]
}
```

## Challenge 5 (MANDATORY)
Create a simple UI for the endpoints using ReactJS or other Frontend Javascript Framework.

---

### OPTIONAL CHALLENGES

### Challenge 6 (Max score: 100)
Create a GraphQL query and mutation version for each endpoints.

### Challenge 7 (Max score: 100)
Create test unit for each endpoints.

### Challenge 8 (Max score: 50)
Create a input validation for each endpoints.

### Challenge 9 (Max score: 50)
Submit your project on Github/Bitbucket.