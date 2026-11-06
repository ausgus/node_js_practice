//async handler 사용 준비
//async handler 를 사용하면 async의 catch(error) 부분을 알아서 잡아줌

import expressAsyncHandler from "express-async-handler";
const asyncHandler = expressAsyncHandler;

import Contact from "../models/contactModel.js";



//Get All contacts
//GET / contacts
export const getAllContacts = asyncHandler( async (req, res) => {
  const contacts = await Contact.find();
  const users = [
    { name : "hong", "email" : "hong@aaa.aaa", phone : "01012345678"},
    { name : "jeong", "email" : "joeng@aaa.aaa", phone : "01098765432"}
  ];
  res.render("getAll", { users :  users });
});


//Create Contacts
//POST / contacts

export const createContact = asyncHandler( async(req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if ( !name || !email || !phone ) {
    return res.send("필수 값이 입력되지 않았습니다.");
  }

  const contact = await Contact.create({
    name,
    email,
    phone
  });
  res.send("Create Contacts");
});

//Get the Contact
//GET / contacts / id

export const getContact = asyncHandler( async(req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.send(contact);
});

//Update the Contact
//PUT / contacts / id

export const updateContact = asyncHandler( async(req, res) => {
  const id = req.params.id;
  const {name, email, phone} = req.body;
  const contact = await Contact.findById(id);

  if (!contact) {
    throw new error("Contact not found.");
  }

  //해당 id의 기존값을 요청값으로 바꿔주기
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  contact.save(); // 변경된 정보 저장

  res.json(contact);
});

//Delete the Contact
//DELETE / contacts / id

export const deleteContact = asyncHandler( async(req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);

  if (!contact) {
    throw new error("Contact not found");
  }

  await Contact.deleteOne();

  res.send("Deleted");
});
