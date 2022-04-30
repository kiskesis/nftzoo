use crate::*;

#[near_bindgen]
impl Contract {
    #[payable]
    pub fn feed_lion(&mut self) -> CardAttr {
        let token_id: TokenId = self.get_token_id(&ZooAnimal::Lion);

        let card_attr = self.card_attr.get(&token_id).unwrap();
        assert!(
            card_attr.food != 0,
            "You have no enough food"
        );
        let new_card_attributes = CardAttr {
            animal_type: card_attr.animal_type,
            experience: card_attr.experience + 10,
            food: card_attr.food - 1,
        };

        self.card_attr.insert(&token_id, &new_card_attributes);
        return new_card_attributes
    }

    pub fn check_token(&self, token_type: &ZooAnimal) -> bool {
        let account_id = env::signer_account_id();
        let token_id: TokenId = self.get_token_id(&token_type);

        return match self.tokens_per_owner.get(&account_id) {
            Some(tokens_per_owner) => tokens_per_owner.contains(&token_id),
            None => false
        }
    }

    // pub fn get_lion_token_id(&self) -> TokenId {
    //     let account_id = env::signer_account_id();
    //     return [&account_id.to_string(), "-lion-animal"].concat();
    // }

    pub fn get_attributes(&self) -> Option<CardAttr> {
        let have_token = self.check_token(&ZooAnimal::Lion);
        let token_id: TokenId = self.get_token_id(&ZooAnimal::Lion);

        assert!(
            have_token,
            "You are not owner of this token"
        );

        return self.card_attr.get(&token_id);
    }

    #[payable]
    pub fn buy_food(
        &mut self
    ) {
        let token_id: TokenId = self.get_token_id(&ZooAnimal::Lion);
        let food_deposit = env::attached_deposit();
        let have_token = self.check_token(&ZooAnimal::Lion);

        assert!(
            have_token,
            "You are not owner of this token"
        );

        let food_count = food_deposit / 1000000000000000000000000;
        let card_attributes = self.card_attr.get(&token_id).unwrap();
        let new_card_attributes = CardAttr {
            animal_type: card_attributes.animal_type,
            experience: card_attributes.experience,
            food: card_attributes.food + food_count,
        };

        self.card_attr.insert(&token_id, &new_card_attributes);
    }
}

// near call $NFT_CONTRACT_ID buy_food '{"deposit": "50"}' --accountId $NFT_CONTRACT_ID