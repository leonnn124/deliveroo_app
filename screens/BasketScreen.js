import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const restaurant = useSelector(selectRestaurant);

  const items = useSelector(selectBasketItems);

  const basketTotal = useSelector(selectBasketTotal);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = React.useState([]);

  useMemo(() => {
    // 避免重複進行複雜耗時的計算 每一次點開購物車 若項目有變動 才會重新遍歷一次陣列 無變動則沿用上一次遍歷結果 (like 狂點購物車 再返回 但實際沒有加點東西 那每點一次就會重新計算一次新陣列 所以如果item內容沒改變 就會把上一次計算的結果拿來用 省效能!)
    const groupedItems = items.reduce((results, item) => {
      // (results, item) results為總和之結果 aka累加器 item為要計算之元素 (由item[0-end]累加)
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});
    // ,後方{}為初始值 初始值為Object
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b-[0.3px] border-[#00CCBB] bg-white shadow-sm">
          <View>
            <Text className="text-center text-lg font-bold">Basket</Text>

            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-5 right-5"
          >
            <XCircleIcon height={50} width={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <Text className="flex-1">Deliver in 10-20 min</Text>

          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>

              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />

              <Text className="flex-1">{items[0].name}</Text>

              <Text className="text-gray-600">$ {items[0].price}</Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>

            <Text className="text-gray-400">$ {basketTotal}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>

            <Text className="text-gray-400">$ 49</Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>

            <Text className="font-extrabold">$ {basketTotal + 49}</Text>
          </View>

          <TouchableOpacity
            className="rounded-lg p-4 bg-[#00CCBB]"
            onPress={() => navigation.navigate("Preparing")}
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
