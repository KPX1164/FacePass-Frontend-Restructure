"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import { Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import SupportForm from "@/components/SupportForm";
export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main className="flex min-h-screen flex-col justify-between lg:items-center">
      <section className="gap-5  VStack text-left w-full h-full mt-10 lg:w-8/12">
        <p className="text-3xl font-medium ">FacePass Support</p>
        <p className="opacity-70 w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          harum sunt minima voluptatum magnam temporibus repellat quos culpa
          tempora? Optio accusamus nisi quis, ratione vel quod. Officia facere
          numquam cupiditate?
        </p>

        <div className="mt-5"></div>

        <section className="VStack items-center p-10 pt-12 gap-4 text-center h-[600px] bg-white rounded-lg shadow-sm relative overflow-hidden">
          <div className="gap-4 VStack items-center z-10">
            <p className="font-medium text-3xl">Get Support</p>
            <p className="opacity-70">
              Give us a few details and we’ll offer the best solution. Connect
              by phone, email, and more.
            </p>
            <Button
              radius="full"
              className="bg-black text-white w-fit shadow-lg"
              onPress={onOpen}
            >
              Start now
            </Button>
          </div>
          <img
            src="support.jpg"
            className="absolute bottom-0 left-0 w-full h-full max-h-[400px] object-cover z-0"
            alt="Support"
          />
        </section>
      </section>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <section className="w-full h-full VStack items-center gap-5 p-5 pt-10">
                <p className="font-medium text-2xl">Get in touch</p>
                <SupportForm />
              </section>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
