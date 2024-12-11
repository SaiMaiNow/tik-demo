<script setup>

</script>

<template>
  <main>
    <div class="mt-6 w-full flex justify-center">
      <div class="bg-gray-800 shadow-md rounded-lg overflow-hidden w-2/4">
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Setting Tikinfinite</h2>
          <label for="username" class="block text-sm font-medium text-gray-300">TikTok Username</label>
          <input type="text" id="username" name="username" placeholder="hmudeng" class="inputUsername">
          <button class="btn-submit">Submit</button>
        </div>
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">DisPlay Tikinfinite</h2>
          <label for="username" class="block text-sm font-medium text-gray-300">TikTok Username : hmudeng</label>
          <div class="flex mt-4 justify-between space-x-4 h-[35rem]">
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-2">Chat Card</h3>
              <div class="bg-gray-700 px-4 pb-4 rounded-md shadow-md h-[33rem] overflow-y-scroll">
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm text-gray-300 font-medium">example_user</p>
                  <p class="text-sm text-gray-300">This is a sample chat</p>
                </div>
              </div>
            </div>

            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-2">Gift Card</h3>
              <div class="bg-gray-700 p-4 rounded-md shadow-md h-[33rem] overflow-y-scroll">
                <p class="text-sm text-gray-300 font-medium">example_user</p>
                <p class="text-sm text-gray-300">Gift: <span class="font-medium">Sample Gift</span></p>
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
  @apply mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm text-white
}

.btn-submit {
  @apply w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
}
</style>