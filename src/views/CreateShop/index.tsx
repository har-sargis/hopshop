"use client";

import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

import useModal from "@/hooks/useModal";

import Button from "@/components/Button";
import Input from "@/components/Input";
import DropdownSelect from "@/components/Select";
import logo from "@assets/hopshop_logo.svg";

const options = ["Daily", "Multiple times a week", "Once a week", "Biweekly", "Monthly", "Occasional"];

function CreateShop() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { Modal, openModal, closeModal } = useModal();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleOpenModal = () => {
    openModal({
      header: (
        <div className='flex justify-center'>
          <Image src={logo} alt='Hop shop' />
        </div>
      ),
      content: (
        <p className='text-sm font-normal text-grey-500'>
          Great! We&apos;ve sent a verification email to your inbox. It has all the instructions you need for the next
          steps. Take a look and follow along!
        </p>
      ),
      footer: (
        <div>
          <Button size='md' onClick={closeModal}>
            Ok
          </Button>
        </div>
      ),
      onClose: closeModal,
    });
  };
  return (
    <>
      {Modal}
      <div className='max-w-md mx-auto rounded'>
        <div className='mb-6 border py-6 px-5 rounded-lg'>
          <h2 className='text-xl font-semibold text-brand-blue-dark text-center'>Attention!</h2>
          <p className='mt-2 text-sm font-normal text-center'>
            Calling all Instagram influencers with stunning outfit pictures! Sign up by August 1st to get a free website
            like this. Earn commissions from outfit-inspired purchases. Fill in your info now!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='mb-6 border py-6 px-5 rounded-lg grid gap-4'>
          <Input className='block w-full p-2 mb-4 border rounded' placeholder='Full name' {...register("fullname")} />
          <Input className='block w-full p-2 mb-4 border rounded' placeholder='Country' {...register("counrty")} />
          <Input
            className='block w-full p-2 mb-4 border rounded'
            placeholder='Email'
            type='email'
            {...register("email")}
          />
          <Input
            className='block w-full p-2 mb-4 border rounded'
            placeholder='Instagram username'
            {...register("username")}
          />
          <DropdownSelect
            options={options}
            placeholder='Activity of posting'
            onChange={(value: string) => setValue("activity", value)}
          />
          <Button type='submit' onClick={handleOpenModal}>
            Send
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateShop;
