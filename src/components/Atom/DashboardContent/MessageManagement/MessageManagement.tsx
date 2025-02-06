"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchAllMessages } from './../../../../actions/getAllMessages/index';
import { FaUser, FaChevronDown, FaSearch, FaRegEnvelope } from "react-icons/fa";
// import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";
import { BiErrorCircle } from "react-icons/bi";
import { FiPhone } from 'react-icons/fi';

const MessageManagement = () => {
  interface Message {
    id: number;
    fullname: string;
    email: string;
    content: string;
    phone_number: string;
    status: "read" | "unread";
    created_at: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMessageId, setExpandedMessageId] = useState<number | null>(null);
  const savedToken = Cookies.get('auth_token');

  const toggleMessage = (id: number) => {
    setExpandedMessageId(prevId => (prevId === id ? null : id));
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        const data = await fetchAllMessages(savedToken!);
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, [savedToken]);

  const filteredMessages = messages.filter(message =>
    message.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Message Management</h1>
          </div>
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-12 shadow-sm focus:border-primary focus:ring-2 focus:ring-red-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`group relative rounded-2xl border bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-l-primary`}
                >
                  {/* <div className="absolute right-4 top-0 my-3">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium`}
                    >
                      {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                    </span>
                  </div> */}
                  <div className="flex items-start gap-2 my-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <FaUser className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-900">{message.fullname}</h2>
                      <p className="text-sm text-gray-500">{message.email}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                      onClick={() => toggleMessage(message.id)}
                    >
                      <FaRegEnvelope className="h-5 w-5 text-primary" />
                      {expandedMessageId === message.id ? 'Hide Message' : 'View Message'}
                      <FaChevronDown className={`h-4 w-4 transition-transform ${expandedMessageId === message.id ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedMessageId === message.id && (
                      <div className="mt-2 bg-gray-100 px-4 py-2 rounded-lg h-20 overflow-y-auto overflow-x-hidden w-full">
                        <p className="text-gray-700 text-sm break-words">
                          {message.content}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FiPhone className="h-4 w-4" />
                      <span>{message.phone_number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredMessages.length === 0 && (
              <div className="flex flex-col items-center py-12 text-center">
                <BiErrorCircle className="h-16 w-16 text-gray-400" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">No messages found</h3>
                <p className="mt-2 text-gray-500">No messages match your search criteria</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MessageManagement;
