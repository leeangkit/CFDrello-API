# CFDrello

* $ git clone  https://github.com/leeangkit/CFDrello-API.git
* $ cd CFDrello-API
* $ npm install

run mongodb with docker
* $ docker run --name node1 -p 27017:27017 --rm mongo sh -c "mkdir /mongo; mongod --dbpath /mongo"

อธิบายนิดนึงครับ
* --name คือชื่อ container ใหม่ครับ
* -p คือ port ที่เรา foward ให้ ระหว่าง machine นั้นและ container นั้น
* –-rm คือลบอันเก่าออกถ้ามีอยู่แล้ว
* mongo อันนี้ คือ imager ที่เรา run ครับ
* sh -c “commmand” อันนี้คือ รันแบบ command ครับ
* mkdir /mongo อันนี้คือ สร้าง folder ไว้ที่ / เอาไว้เก็บข้อมูล
* mongod อันนี้คือ run mongo daemon ทั่วไป
* –-dbpath อันนี้คือ จะเอาข้อมูลไว้ที่ไหน
* mongod --dbpath อันนี้เป็น command ทั่วไปที่ใช้ในการ run mongo daemon

build api with docker
* $ docker build -t NAME_IMAGE .

run api with docker
* $ docker run --name NAME_CONTAINER -p PORT_DOCKER:MYPORT  --link NAME_LINKCONTAINER NAME_IMAGE



