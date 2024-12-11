<script>
  import { io } from "socket.io-client";
  export default {
    data() {
      return {
        tiktokUsername: "",
        messages: [],
        socket: null,
      };
    },
    methods: {
      joinLive() {
        if (!this.tiktokUsername.trim()) {
          alert("Please enter a valid TikTok username.");
          return;
        }

        if (!this.socket) {
          this.socket = io("http://localhost:3000");

          this.socket.on("tiktok-data", (data) => {
            this.messages.push(data);
            this.saveDateRoom();
            this.scrollToBottom();
          });

          this.socket.on("error", (message) => {
            alert(message);
          });
        }
        
        this.messages.push({
          type: "chat",
          username: "System",
          comment: `Welcome to ${this.tiktokUsername}'s chat!`,
        });

        this.socket.emit("join", { tiktokUsername: this.tiktokUsername.trim() });
      },
      exitLive() {
        if (this.socket) {
          this.socket = null;
          this.messages = [];
          this.tiktokUsername = "";
          this.saveDateRoom();
        }
      },
      scrollToBottom() {
        this.$nextTick(() => {
          const container = this.$refs.messagesContainer;
          if (container) {
            container.scrollTop = container.scrollHeight;
          }
        });
      },
      saveDateRoom() {
        const dataRoom = {
          messages: this.messages,
          tiktokUsername: this.tiktokUsername,
        };

        localStorage.setItem("DateRoom", JSON.stringify(dataRoom));
      },
      loadDateRoom() {
        const dateRoom = localStorage.getItem("DateRoom");
        if (dateRoom) {
          try {
            const { messages, tiktokUsername } = JSON.parse(dateRoom);
            this.tiktokUsername = tiktokUsername || "";
            this.messages = messages || [];
            this.scrollToBottom();
          } catch (error) {
            console.error("Error parsing DateRoom:", error);
          }
        }
      },
    },
    created() {
      this.loadDateRoom();
      if (this.tiktokUsername.trim()) {
        this.joinLive();
      }
    },
  };
</script>

<template>
  <main>
    <div class="mt-6 w-full flex justify-center">
      <div class="bg-gray-800 shadow-md rounded-lg overflow-hidden w-2/4">
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Setting Tikinfinite</h2>
          <label for="username" class="block text-sm font-medium text-gray-300">TikTok Username</label>
          <div class="flex mt-1">
            <input type="text" id="username" name="username" placeholder="hmudeng" class="inputUsername" v-model="tiktokUsername">
            <button class="btn-exit" @click="exitLive">✕</button>
          </div>
          <button class="btn-submit" @click="joinLive" >Submit</button>
        </div>
        <div class="p-4" v-if="tiktokUsername">
          <h2 class="text-xl font-semibold mb-2">DisPlay Tikinfinite</h2>
          <label for="username" class="block text-sm font-medium text-gray-300">TikTok Username : {{ tiktokUsername }}</label>
          <div class="flex mt-4 justify-between space-x-4">
            <div class="flex-1" v-if="messages.length > 0">
              <h3 class="text-lg font-semibold mb-2">Chat Card</h3>
              <div class="bg-gray-700 px-4 pb-4 rounded-md shadow-md overflow-y-scroll max-h-[35rem]" ref="messagesContainer">
                <div v-for="(message, index) in messages" :key="index">
                  <div class="pt-4" v-if="message.type === 'chat'">
                    <p class="text-sm text-gray-300 font-medium">{{ message.username }}</p>
                    <p class="text-sm text-gray-300">{{ message.comment }}</p>
                  </div>
                  <div class="pt-4" v-if="message.type === 'gift'">
                    <p class="text-sm text-gray-300 font-medium">{{ message.username }}</p>
                    <p class="text-sm text-gray-300">sent {{ message.giftName }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.inputUsername {
  @apply block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm text-white
}

.btn-submit {
  @apply w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
}

.btn-exit {
  @apply p-2 px-4 ml-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
}
</style>