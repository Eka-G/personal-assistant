<template>
  <header class="header">
    <PCContentWrapper>
      <div class="header__wrapper">
        <img
          alt="Pink Chiken"
          class="header__logo"
          src="@/assets/img/logo.svg"
          width="181"
          height="24"
        />

        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item header__info">
              <div class="header__info-item header__convert">
                <div class="header__icon header__convert-icon">
                  <img alt="выручка" src="@/assets/img/convert-card.svg" width="24" height="24" />
                </div>
                <span class="header__convert-text">5%</span>
                <span class="header__convert-text header__hidden-text"> выручки</span>
              </div>
              <div class="header__info-item header__user">
                <div class="header__icon header__user-icon">
                  <img alt="user" src="@/assets/img/user.svg" width="24" height="24" />
                </div>
                <span class="header__user-text">Username@adaurum.ru</span>
              </div>
            </li>

            <li class="header__nav-item">
              <button class="header__button header__settings">
                <img alt="настройки" src="@/assets/img/settings.svg" width="24" height="24" />
              </button>
              <button class="header__button header__login">
                <img alt="login" src="@/assets/img/login.svg" width="24" height="24" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </PCContentWrapper>
  </header>
</template>

<script setup>
import PCContentWrapper from '@/components/PCContentWrapper.vue';
</script>

<style lang="scss">
.header {
  padding: 28px 20px 10px 20px;
  font-size: 14px;
  background-color: var(--pc-c-primary-background);

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__nav,
  &__nav-list {
    width: 100%;
  }

  &__nav-list,
  &__nav-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav-list {
    margin-top: 16px;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__convert {
    font-size: 12px;
    order: 2;
  }

  &__convert-text {
    color: var(--pc-c-secondary-font-color);
  }

  &__user-text {
    font-weight: 550;
  }

  &__hidden-text {
    display: inline;
  }

  &__button,
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--pc-c-primary-background) center center / 24px no-repeat;
  }

  &__icon {
    display: none;
  }

  &__button {
    background-color: var(--pc-c-secondary-background);

    &:first-child {
      margin-right: 12px;
    }
  }
}

@media (min-width: 768px) {
  .header {
    padding: 33px 0;
    font-size: 16px;
    background-color: var(--pc-c-secondary-background);

    &__logo {
      width: 209px;
      height: 28px;
    }

    &__wrapper,
    &__info-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__nav,
    &__nav-list {
      width: fit-content;
    }

    &__nav-list {
      margin-top: 0;
    }

    &__info {
      flex-direction: row;
      font-weight: 550;
    }

    &__convert {
      font-size: 16px;
      order: 1;
    }

    &__user {
      order: 2;
    }

    &__nav-item:not(:last-child),
    &__info-item:not(:last-child) {
      margin-right: 20px;
    }

    &__button {
      background-color: var(--pc-c-primary-background);
    }

    &__icon {
      margin-right: 10px;
      display: flex;
      background-color: var(--pc-c-primary-color);
    }

    &__convert-text {
      color: var(--pc-c-primary-font-color);
    }

    &__hidden-text {
      display: none;
    }
  }
}

@media (min-width: 992px) {
  .header {
    font-size: 18px;

    &__logo {
      width: 219px;
      height: 30px;
    }

    &__convert {
      font-size: 18px;
    }
  }
}
</style>
